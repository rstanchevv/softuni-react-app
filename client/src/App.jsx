import { Navigation } from "./components/Navigation/Navigation";
import { PageLoader } from "./components/Home/PageLoader";
import { HeroSection } from "./components/Home/HeroSection";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AllOfferComponents } from "./components/Offers/AllOffersComponent";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { OfferDetailsCompnent } from "./components/Offers/OfferDetailsComponent";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { ErrorNotification } from "./components/Home/ErrorNotification";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [authInfo, setAuthInfo] = useState();

  const registerSubmitHandler = (values) => {
    if (values.password !== values.rePassword) {
      alert('Passwords don\'t match')
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthInfo(user);
        setError(null);
        navigate("/");
      })
      .catch((error) => {
        alert("Email is already in use");
      });
  };

  const loginSubmitHandler = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthInfo(user);
        setError(null);
        navigate("/");
      })
      .catch((error) => {
        setError("Invalid credentials");
      });
  };

  const signOutHandler = () => {
    signOut(auth).then(alert(`Signed out successfully`))
    setAuthInfo(null)
  }

  const location = useLocation();
  const [currentLocation, setNewLocation] = useState("");
  useEffect(() => {
    setNewLocation(location.pathname);
  });

  return (
    <>
      <PageLoader />
      <Navigation location={currentLocation} authInfo={authInfo} signOutHandler={signOutHandler} />
      {error && <ErrorNotification error={error} />}
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        ></Route>
        <Route
          path="/register"
          element={<Register registerSubmitHandler={registerSubmitHandler} />}
        ></Route>
        <Route path="/catalog" element={<AllOfferComponents />}></Route>
        <Route
          path="/catalog/:catalogId"
          element={<OfferDetailsCompnent />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

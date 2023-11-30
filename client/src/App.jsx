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

// import styles from './components/Home/homeSection.modules.css'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


function App() {
  const [authInfo, setAuthInfo] = useState();
  const navigate = useNavigate()
  const registerSubmitHandler = (values) => {
    if (values.password !== values.rePassword){
      throw new Error('Passwords don\'t match')
    }
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setAuthInfo(user)
        navigate('/')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  };
  const loginSubmitHandler = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setAuthInfo(user)
      navigate('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message)
    });
  };

  const location = useLocation();
  const [currentLocation, setNewLocation] = useState("");
  useEffect(() => {
    setNewLocation(location.pathname);
  });

  return (
    <>
      <PageLoader />
      <Navigation location={currentLocation} authInfo={authInfo} />
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        ></Route>
        <Route path="/register" element={<Register registerSubmitHandler={registerSubmitHandler}/>}></Route>
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

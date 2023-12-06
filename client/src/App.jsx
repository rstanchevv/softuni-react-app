import { Navigation } from "./components/Navigation/Navigation";
import { PageLoader } from "./components/Home/PageLoader";
import { HeroSection } from "./components/Home/HeroSection";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AllOfferComponents } from "./components/Offers/AllOffersComponent";
import { useState } from "react";
import { OfferDetailsCompnent } from "./components/Offers/OfferDetailsComponent";
import { ErrorNotification } from "./components/Home/ErrorNotification";
import { login, logout, register } from "./lib/auth";
import AuthContext from "./contexts/authContext";
import { HeroSectionAuthenticated } from "./components/Home/HeroSectionAuthenticated";
import { AddOfferForm } from "./components/Offers/AddOfferForm";
import { createOffer, deleteOffer } from "./service/offersService";
import RequireAuth from "./components/requireAuth";
import { EditOfferForm } from "./components/Offers/EditOfferForm";

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [authInfo, setAuthInfo] = useState();

  const registerSubmitHandler = async (values) => {
    try {
      const user = await register(values);
      setAuthInfo(user);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const loginSubmitHandler = async (values) => {
    try {
      const user = await login(values);
      setAuthInfo(user);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  const signOutHandler = () => {
    logout();
    setAuthInfo(null);
  };

  const createOfferSubmitHandler = async (values) => {
    const emptyFields = Object.values(values).some((x) => x == "");
    if (emptyFields) {
      setError("All fields are mandatory!");
      setTimeout(() => {
        setError(null);
      }, 2000);
      return
    }
    try {
      const res = { ...values, ownerId: authInfo.uid };
      await createOffer(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthContext.Provider value={{ authInfo }}>
      <PageLoader />
      <Navigation signOutHandler={signOutHandler} />
      {error && <ErrorNotification error={error} />}
      <Routes>
        <Route
          path="/"
          element={
            (authInfo && <HeroSectionAuthenticated />) || <HeroSection />
          }
        ></Route>
        <Route element={<RequireAuth/>}>
        <Route path="/logout" element={<HeroSection />}></Route>
        <Route path="/catalog/:id/delete" element={<AllOfferComponents/>}></Route>
        <Route path="/catalog/:id/edit" element={<EditOfferForm/>}></Route>
        <Route
          path="/add-offer"
          element={
            <AddOfferForm createOfferSubmitHandler={createOfferSubmitHandler} />
          }
        ></Route>
        </Route>
        
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        ></Route>
        <Route
          path="/register"
          element={<Register registerSubmitHandler={registerSubmitHandler} />}
        ></Route>
        <Route path="/catalog" element={<AllOfferComponents />}></Route>
        <Route path="/catalog/:id" element={<OfferDetailsCompnent/>}></Route>
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;

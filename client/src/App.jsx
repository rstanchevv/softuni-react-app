import { Navigation } from "./components/Navigation/Navigation"
import { PageLoader } from "./components/Home/PageLoader"
import { HeroSection } from "./components/Home/HeroSection"
import { Footer } from "./components/Footer/Footer"
import {Routes, Route} from 'react-router-dom'
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { AllOfferComponents } from "./components/Offers/AllOffersComponent"
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from "react"
import { OfferDetailsCompnent } from "./components/Offers/OfferDetailsComponent"

// import styles from './components/Home/homeSection.modules.css'


function App() {

  const location = useLocation();
  const [currentLocation, setNewLocation] = useState('')
  useEffect(() => {
    setNewLocation(location.pathname)
  })


  return (
    <>
      <PageLoader/>
      <Navigation location={currentLocation}/>
      <Routes>
        <Route path="/" element={<HeroSection/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/catalog" element={<AllOfferComponents/>}></Route>
        <Route path="/catalog/:catalogId" element={<OfferDetailsCompnent/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

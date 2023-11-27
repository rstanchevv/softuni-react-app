import { Navigation } from "./components/Navigation/Navigation"
import { PageLoader } from "./components/Home/PageLoader"
import { LatestOffersSection } from "./components/Home/LatestOffersSection"
import { Footer } from "./components/Footer/Footer"
import {Routes, Route} from 'react-router-dom'
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"


function App() {

  return (
    <>
      <PageLoader/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<LatestOffersSection/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

import { HeroSection } from "./components/Search"
import { Navigation } from "./components/Navigation"
import { PageLoader } from "./components/PageLoader"
import { LatestOffersSection } from "./components/LatestOffersSection"
import { Footer } from "./components/Footer"


function App() {

  return (
    <>
      <PageLoader/>
      <Navigation/>
      <HeroSection/>
      <LatestOffersSection/>
      <Footer/>
    </>
  )
}

export default App

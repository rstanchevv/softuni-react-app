import { Navigation } from "./components/Navigation/Navigation"
import { PageLoader } from "./components/Home/PageLoader"
import { LatestOffersSection } from "./components/Home/LatestOffersSection"
import { Footer } from "./components/Footer/Footer"


function App() {

  return (
    <>
      <PageLoader/>
      <Navigation/>
      <LatestOffersSection/>
      <Footer/>
    </>
  )
}

export default App

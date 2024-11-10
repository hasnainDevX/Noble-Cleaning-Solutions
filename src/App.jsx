import About from "./components/About"
import Header from "./components/Header"
import Services from "./components/Services"
import Faq from "./components/Faq"
import Achievements from "./components/Achievements"
import Booking from "./components/Booking"
import Footer from "./components/Footer"
import CoverServices from "./components/CoverServices"
import Pricing from "./components/Pricing"

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Services/>
      <CoverServices/>
      <Achievements/>
      <Pricing/>
      <Booking/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App

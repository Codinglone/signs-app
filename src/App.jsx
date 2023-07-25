import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Sandbox from "./components/Sandbox"
import { Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dictionary" element={'Dictionary page'} />
        <Route path="/interactive" element={'Interactive'} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/about" element={'About Us'} />
        <Route path="*" element={'404 - Page not found! 👹'} />
      </Routes>
    </>
  )
}

export default App

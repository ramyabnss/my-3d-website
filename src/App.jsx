import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import NextSection from './sections/NextSection'
import CampusLife from './sections/CampusLife'
import Gallery from './sections/Gallery'
import Footer from "./sections/Footer"

function App() {
  const [count, setCount] = useState(0)

 return (
    <>
      <Navbar />
      <Hero />
      <About />
      <NextSection />
      <CampusLife />
      <Gallery />
      <Footer />
    </>
  );
}

export default App

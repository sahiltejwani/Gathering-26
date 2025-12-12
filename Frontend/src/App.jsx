import './App.css'
import { Routes, Route } from "react-router-dom"

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

import Home from './pages/Home'
import Events from './pages/Events'
import Sports from './pages/Sports'
import Team from './pages/Team'
import Passes from './pages/Passes'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/team" element={<Team />} />
        <Route path="/passes" element={<Passes />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

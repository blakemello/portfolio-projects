import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeContext, ThemeContextProvider } from './ThemeContext'
import Home from './components/Home'
import Events from './components/Events'
import StoreMain from './components/StoreMain'
import TrainingMain from './components/TrainingMain'
import AboutUs from './components/AboutUs'
import LetsTalkScuba from './components/LetsTalkScuba'
import ContactUs from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
  <ThemeContextProvider>
    <Router>
      <nav>
        <Link to="/" style={{padding: 5}}> 
          Home
        </Link>
        <Link to='/events-travel-dives' style={{padding: 5}}>
          EVENTS, TRAVEL & DIVES
        </Link>
        <Link to='/aloha-store' style={{padding: 5}}>
          Store & Rentals
        </Link>
        <Link to='/scuba-classes-basic-open-water-certification' style={{padding: 5}}>
          Training
        </Link>
        <Link to='/about-us' style={{padding: 5}}>
          About Us
        </Link>
        <Link to='/lets-talk-scuba' style={{padding: 5}}>
          Let's Talk Scuba
        </Link>
        <Link to='/contact-us' style={{padding: 5}}>
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events-travel-dives' element={<Events />}/>
        <Route path='/aloha-store' element={<StoreMain />}/>
        <Route path='/scuba-classes-basic-open-water-certification' element={<TrainingMain />}/>
        <Route path='/about-us' element={<AboutUs />}/>
        <Route path='/lets-talk-scuba' element={<LetsTalkScuba />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
    </Router>
  </ThemeContextProvider>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/Navbar'
import Home from '@/containers/Home'
import Websites from '@/containers/Websites'

function App() {

  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          {/* <Route path="/writings" element={<Writings />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>

    </Router>
  )
}

export default App

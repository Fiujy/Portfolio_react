import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/Navbar'
import Home from '@/containers/Home'
import Projects from '@/containers/Projects'
import Writings from './containers/Writings'
import Drawings from './containers/Drawings'
import Dashboard from './containers/Dashboard'

function App() {

  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Navbar/>
        <div className='flex-grow overflow-auto mt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writings" element={<Writings />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </div>

    </Router>
  )
}

export default App

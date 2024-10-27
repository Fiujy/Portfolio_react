import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@/App.css'
import '@/i18n'
import Navbar from '@/components/Navbar'
import Home from '@/containers/Home'
import Projects from '@/containers/Projects'
import Writings from '@/containers/Writings'
import Drawings from '@/containers/Drawings'
import Dashboard from '@/containers/Dashboard/Dashboard'
import ProjectsAdd from '@/containers/Dashboard/Projects/ProjectsAdd'
import DashboardHome from '@/containers/Dashboard/DashboardHome'
import Contact from '@/containers/Contact'

function App() {

  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='flex-grow overflow-auto mt-16'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/drawings" element={<Drawings />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />} />
              <Route path="projects/add" element={<ProjectsAdd />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

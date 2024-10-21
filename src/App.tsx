import './App.css'
import Navbar from './components/Navbar'
import Picture from '@/components/Picture'
import Presentation from '@/components/Presentation'


function App() {

  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col">
        <div className="flex flex-grow">
          <div className="w-1/2 flex items-center justify-center">
            <Picture />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Presentation />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

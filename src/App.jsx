import { Navbar } from './components/Navbar/Navbar.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='mainContainer'>
      <Navbar />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App

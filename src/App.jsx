import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'
import Footer from './components/Footer'

const App=()=> {

  return (
    <div className='container_app'>
      <Navbar/>
      {/* pra mostrar os elementos do componente uso o outlet: */}
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App

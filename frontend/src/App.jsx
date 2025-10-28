import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>  
      </Routes>
      <Footer />
    </div>
  )
}

export default App
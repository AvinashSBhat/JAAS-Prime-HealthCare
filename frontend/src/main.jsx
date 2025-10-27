import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/Style/index.css'
import App from './App.jsx'
import DoctorBanner from './component/Banner.jsx'
import TopDoctors from './component/TopDoctors.jsx'
import DoctorsList from './component/TopDoctors.jsx'
// import DoctorCard from './component/DoctorCards.jsx'
// import BookAppointmentCard from './component/Banner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <DoctorBanner/>
    {/* <TopDoctors/> */}
    <DoctorsList/>
    {/* <DoctorCard/> */}
    {/* <BookAppointmentCard/> */}
  </StrictMode>,
)


import './App.css'
import HomePage from './pages/HomePage'
import IntroductionPage from './pages/Introduction Page/IntroductionPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TableContentsPage from './pages/Table of Contents/TableContentsPage'
import MembersPage from './pages/Members Page/MembersPage'
import StudentProfilePage from './pages/Student Profile/StudentProfilePage'
import DellosaAtheletePage from './pages/StudentIndividualPages/DellosaAthletePage'
import DespabiladerasAthletePage from './pages/StudentIndividualPages/DespabiladerasAthletePage'
import DonquilloAthletePage from './pages/StudentIndividualPages/DonquilloAtheletePage'
import EstavilloAthletePage from './pages/StudentIndividualPages/EstavilloAthletePage'
import FerrerasAthletePage from './pages/StudentIndividualPages/FerrerasAthletePage'
import GarraAthletePage from './pages/StudentIndividualPages/GarraAthletePage'
import LacupantoAthletePage from './pages/StudentIndividualPages/LacupantoAthletePage'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/intro" element={<IntroductionPage></IntroductionPage>}></Route>
      <Route path="/contents" element={<TableContentsPage></TableContentsPage>}></Route>
      <Route path="/members" element={<MembersPage></MembersPage>}></Route>
      <Route path="/studentprofile" element={<StudentProfilePage></StudentProfilePage>}></Route>



      <Route path="/studentprofiles/1" element={<DellosaAtheletePage></DellosaAtheletePage>}></Route>
      <Route path="/studentprofiles/2" element={<DespabiladerasAthletePage></DespabiladerasAthletePage>}></Route>
      <Route path="/studentprofiles/3" element={<DonquilloAthletePage></DonquilloAthletePage>}></Route>
      <Route path="/studentprofiles/4" element={<EstavilloAthletePage></EstavilloAthletePage>}></Route>
      <Route path="/studentprofiles/5" element={<FerrerasAthletePage></FerrerasAthletePage>}></Route>
      <Route path="/studentprofiles/6" element={<GarraAthletePage></GarraAthletePage>}></Route>
      <Route path="/studentprofiles/7" element={<LacupantoAthletePage></LacupantoAthletePage>}></Route>
    </Routes>
   </Router>
  )
}

export default App


import './App.css'
import HomePage from './pages/HomePage'
import IntroductionPage from './pages/Introduction Page/IntroductionPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TableContentsPage from './pages/Table of Contents/TableContentsPage'
import MembersPage from './pages/Members Page/MembersPage'
import StudentProfilePage from './pages/Student Profile/StudentProfilePage'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/intro" element={<IntroductionPage></IntroductionPage>}></Route>
      <Route path="/contents" element={<TableContentsPage></TableContentsPage>}></Route>
      <Route path="/members" element={<MembersPage></MembersPage>}></Route>
      <Route path="/studentprofile" element={<StudentProfilePage></StudentProfilePage>}></Route>
    </Routes>
   </Router>
  )
}

export default App

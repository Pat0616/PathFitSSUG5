
import './App.css'
import HomePage from './pages/HomePage'
import IntroductionPage from './pages/Introduction Page/IntroductionPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/intro" element={<IntroductionPage></IntroductionPage>}></Route>
    </Routes>
   </Router>
  )
}

export default App

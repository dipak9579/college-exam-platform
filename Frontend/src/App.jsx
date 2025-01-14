import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Landing from './pages/Landing/Landing'
import Register from './components/SignUp/Register'
import Login from './components/SignUp/Login'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const HomePage=()=>{
  return(
    <>
     <Navbar/>
     <Landing/>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App

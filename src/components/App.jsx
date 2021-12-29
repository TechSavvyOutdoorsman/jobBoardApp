import Signup from './SignupForm'
import Home from '../pages'
import Login from './Login'
import Navbar from './Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {

  return (

    <Router>
      <Navbar /> 
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/signup' exact element={<Signup />} />
        </Routes>
    </Router>


  ) 
  
}

export default App

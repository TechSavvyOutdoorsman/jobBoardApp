import Signup from './SignupForm'
import Home from '../pages'
import Login from './Login'
import ResetPassword from './ResetPassword'
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
          <Route path='/resetpassword' exact element={<ResetPassword />} />
        </Routes>
    </Router>


  ) 
  
}

export default App

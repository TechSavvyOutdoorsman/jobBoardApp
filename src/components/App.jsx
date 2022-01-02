// import Signup from './Signup'
import Home from '../pages'
import Login from './Login'
import CreateJobPost from './CreateJobPost'
// import ResetPassword from './ResetPassword'


import { Button } from 'react-bootstrap'

import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = '/login'
    })
  }

  return (

    <Router>
      <nav>
        <Link to='/'>Home</Link>
       {!isAuth ? <Link to='/login'>Log In</Link> 
      : (
        <>
        <Link to='/createjobpost'>Create Post</Link>
        <Button onClick={signUserOut} className='btn btn-primary-outline'>Log Out</Button>
        </>
      )}
      </nav>
      


      {/* <Navbar />  */}
        <Routes>
          <Route path='/' exact element={<Home isAuth={isAuth} />} />
          <Route path='/login' exact element={<Login setIsAuth={setIsAuth} />} /> 
          <Route path='/createjobpost' exact element={<CreateJobPost isAuth={isAuth} />} /> 
          {/* <Route path='/signup' exact element={<Signup setIsAuth={setIsAuth} />} /> */}
          {/* <Route path='/resetpassword' exact element={<ResetPassword />} /> */}
        </Routes>
    </Router>


  ) 
  
}

export default App

import { useState } from 'react'
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendSignInLinkToEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import '../../scss/main.scss'
import { Form, Button, Container } from 'react-bootstrap'
import { MdOutlineMail } from 'react-icons/md'


function Signup({ isAuth }) { 
    
    // const [registerPassword, setRegisterPassword] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({})
    
    let navigate = useNavigate()
    
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    
     const registerUser = async () => {
        try {
            const data = await createUserWithEmailAndPassword(auth, email, password)
            console.log(data)
        } catch(error) {
            alert(error.message)
        }
    }

    // const actionCodeSettings = {
    //     url: 'localhost',
    //     handleCodeApp: true,
    // }


    // sendSignInLinkToEmail(auth, email, actionCodeSettings).then(() => {
    //     localStorage.setItem('emailForSignIn', email)
        
    // }).catch((error) => {
    //     alert(error.message)
    // })

    
    return (
            <div 
            className="d-flex p-2 align-items-center justify-content-center"
            style={{width: '100vw', height: '100vh'}}
            >
                <div className="d-flex">

                    <Container fluid='lg'>
                        <Form
                        style={{textAlign: 'left', border: '1px solid lightgrey', borderRadius: '10px'}}
                        className='w-100 p-3'
                        >
                        <Form.Group className='mb-3'>
                            <Form.Label>Email:</Form.Label>    
                            <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}></Form.Control>
                        </Form.Group>    
                        <Form.Group className='mb-3'>
                            <Form.Label>Password:</Form.Label>    
                            <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Form.Group>    
                        {/* <Form.Group className='mb-3'>
                            <Form.Label>Confirm Password:</Form.Label>    
                            <Form.Control type='password' onChange={(e) => setRegisterPassword(e.target.value)}></Form.Control>
                        </Form.Group>     */}
                        <Button variant="primary" className="w-100 p-1.5" onClick={sendSignInLinkToEmail}><MdOutlineMail /> Sign Up</Button>
                        </Form>
                    </Container>

                </div>

            </div>
        )
}


export default Signup
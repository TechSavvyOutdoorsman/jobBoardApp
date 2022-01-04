import { useState } from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import '../../scss/main.scss'
import { Form, Button, Container } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineMail } from 'react-icons/md'


function Login({ setIsAuth }) { 

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    let navigate = useNavigate()

    const signInWithGoogle = () => {
         signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
            navigate('/')
        })
    }

    const signInWithEmail = () => {
         signInWithEmailAndPassword(auth, email, password).then((result) => {
            localStorage.setItem('isEmailAuth', true)
            setIsAuth(true)
            navigate('/')
        })
    }

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
                        <Button variant="primary" className="w-100 p-1.5" onClick={signInWithEmail}><MdOutlineMail /> Sign in with Email</Button>
                        <p style={{textAlign: 'center'}}>or</p>
                        <Button variant="outline-primary" className="w-100 p-1.5" onClick={signInWithGoogle}><FcGoogle /> Sign in with Google</Button>
                        </Form>
                    </Container>

                </div>

            </div>
        )
}


export default Login
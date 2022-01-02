
import { Form, Button } from 'react-bootstrap'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import '../../scss/main.scss'


function Signup({ setIsAuth }) { 

    let navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true)
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
                    <Form>
                    <h2 className="primary">Sign in with Google to Continue</h2>
                    <Button className="btn btn-primary w-100 mt-2" onClick={signInWithGoogle}>Sign in with Google</Button>   
                    </Form>
                </div>

            </div>
        )
}


export default Signup
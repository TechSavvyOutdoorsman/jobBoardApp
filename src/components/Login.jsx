import { Component } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Userfront from '@userfront/react'
import '../../scss/main.scss'

Userfront.init('demo1234')

// const LoginForm = Userfront.build({
//     toolId: 'alnkkd'
// })

class Login extends Component { 


    constructor(props) { 
        super(props)
        this.state={
            email: '',
            password: '',
            passwordVerify: '',
            alertMessage: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setAlertMessage = this.setAlertMessage.bind(this)

    }
    



    // whenever an input changes value, change the corresponding state variable
    handleInputChange(event) { 
        event.preventDefault()
        const target = event.target
        this.setState({
            [target.name]: target.value
        })
    }

    // Handle the form submission by calling Userfront.signup()
    handleSubmit(event) {
        event.preventDefault()
        // Reset the alert to empty
        this.setAlertMessage()
        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) { 
            return this.setAlertMessage('Passwords must match')
        } 
        // Call Userfront.signup()
        Userfront.signup({
            method: 'password',
            email: this.state.email,
            password: this.state.password

        }) .catch((error) => {
            this.setAlertMessage(error.message)
        })

    }

    // Handle the alert message so it displays on our Alert component

    setAlertMessage(message) {
        
            this.setState({ alertMessage: message })
    }


    render () {
        return (



<div className="bg bg-white d-flex justify-content-center align-items-center"
style={{width: '100vw', height: '100vh'}}
>


            <div className=" justify-content-center align-content-center d-flex "
            >

                <div
                style={{ maxWidth: '400px', height: '100%'}}
                >
            <Container className="bg-ul" style={{ borderRadius: '10px' }}>
            <Form 
            onSubmit={this.handleSubmit}
            >
                <Form.Group
                controlId="formBasicEmail"
                >
                    <Form.Label>
                        Email Address
                        </Form.Label>
                    <Form.Control
                    placeholder="name@example.com"
                    type='email'
                    onChange={this.handleInputChange}
                    defaultValue={this.state.email}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group
                controlId="formBasicPassword"
                className='mt-3'
                >
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control
                    placeholder="password1234"
                    type='password'
                    onChange={this.handleInputChange}
                    defaultValue={this.state.password}
                    >
                    </Form.Control>
                </Form.Group>
                
                <Button style={{ width: '100%'}} className='mt-4 btn btn-primary' type='submit'>Login</Button>
                <p
                className='mt-3'
                >Don't have an account? Click
                <Link
                to='/signup'
                style={{ fontSize: 'medium', textTransform: 'lowercase', paddingLeft: '.5rem'}}>here.</Link>
                </p>
                <p
                >Forgot your password? Click
                <Link
                to='/resetpassword'
                style={{ fontSize: 'medium', textTransform: 'lowercase', paddingLeft: '.5rem'}}>here.</Link>
                </p>
            </Form>
        </Container>

</div>
</div>
</div>

        )
    }
}


export default Login
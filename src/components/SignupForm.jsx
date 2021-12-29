import { Component, Alert } from 'react'
import Userfront from '@userfront/react'
import '../../scss/main.scss'

Userfront.init('demo1234')

// const SignupForm = Userfront.build({
//     toolId: 'nkmbbm'
// })

class Signup extends Component {
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

    setAlertMessage(message) { 
        this.setState({ alertMessage: message })
    }

    render () {

        return (


            <section>
                <div className="bg bg-white">

                    <div 
                    className="wrapper" 
                    style={{ height: '100vh', width: '100vw'}}
                    >
                        <div className="flex-center center" style={{maxWidth: '400px'}}>
                            <div id="alert">{this.props.alertMessage}</div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Email Address
                                    <input 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    />
                                </label>
                                <label>
                                    Password
                                    <input 
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    />
                                </label>
                                <label>
                                    Confirm Password
                                    <input 
                                    type="password"
                                    name="passwordVerify"
                                    value={this.state.passwordVerify}
                                    onChange={this.handleInputChange}
                                    />
                                </label>
                                <button type="submit">Sign up</button>
                            </form>

                        </div>
                    </div>

                </div>
            </section>
                            // <SignupForm /> 

        )
    } 
}



export default Signup


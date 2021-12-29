import { Component } from 'react'
import Userfront from '@userfront/react'
import '../../scss/main.scss'

Userfront.init('demo1234')

const LoginForm = Userfront.build({
    toolId: 'alnkkd'
})

class Login extends Component { 
    render () {
        return (
            <section>
                <div className="bg bg-white">

                    <div 
                    className="wrapper" 
                    style={{ height: '100vh', width: '100vw'}}
                    >
                        <div className="center" style={{maxWidth: '400px'}}>
                            <LoginForm /> 
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}


export default Login
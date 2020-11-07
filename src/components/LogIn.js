import React, { Component } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './LogIn.css'


//const { history } = this.props

export class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: '', 
            passwordError: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    validate = () => {
        let emailError = ''
        let passwordError = ''

        if(!this.state.password) {
            passwordError = 'password cannot be blank'
        }

        if(!this.state.email.includes('@')) {
            emailError = 'Invalid email'
        }

        if(emailError || passwordError) {
            this.setState({emailError, passwordError})
            return false
        }
        return true
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(`email: ${this.state.email}`)

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(`http://localhost:4000/signin`, user)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
            
            const isValid = this.validate()

            if(isValid) {
                console.log(this.state)
                this.setState({
                    email: '',
                    password: '',
                    emailError: '', 
                    passwordError: ''
                })
            
                this.props.history.push('/memberarea') 
            }

    }

    render() {
        const { email, password } = this.state
        return (
            <div id="login-form-div">
                <h4 id="login-header">LogIn</h4>
                <div className="login-div">
                    <form id="form-div" onSubmit={this.handleSubmit}>
                        <input className="form-input" type="text" placeholder="Email" value={email} onChange={this.handleEmailChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                        <input className="form-input" type="text" placeholder="Password" value={password} onChange={this.handlePasswordChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                        <input id="form-submit" type="submit" value="Log In" />
                        <p>Don't have an account? <a href="/member-form">Sign up here</a></p>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default  withRouter(LogIn)

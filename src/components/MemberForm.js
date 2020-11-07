import React, { Component } from 'react'
import Footer from './Footer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import './MemberForm.css'


export class MemberForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            emailError: '',
            passwordError: '',
            firstNameError: '',
            lastNameError: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
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

    handleFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        })
    }


    validate = () => {
        let emailError = ''
        let passwordError = ''
        let firstNameError = ''
        let lastNameError = ''

        if(!this.state.email.includes('@')) {
            emailError = 'Invalid email'
        }

        if(!this.state.password) {
            passwordError = 'Password cannot be blank'
        }

        if(!this.state.firstName) {
            firstNameError = 'First Name cannot be blank'
        }

        if(!this.state.lastName) {
            lastNameError = 'Last Name cannot be blank'
        }

        if(emailError || passwordError || firstNameError || lastNameError) {
            this.setState({ emailError, passwordError, firstNameError, lastNameError })
            return false
        }
        return true

    }



    handleSubmit(e) {
        e.preventDefault()
        console.log(`email: ${this.state.email}`)
        console.log(`password: ${this.state.password}`)
        console.log(`first name: ${this.state.firstName}`)
        console.log(`email: ${this.state.email}`)

        const newUser = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        axios.post(`http://localhost:4000/signup`,newUser)
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
                firstName: '',
                lastName: '',
                emailError: '',
                passwordError: '',
                firstNameError: '',
                lastNameError: ''
            })

            this.props.history.push('/memberarea')
        }

    }

    render() {
        const { email, password, firstName, lastName } = this.state
        return (
            <div id="member-form-div">
                <h4 id="login-header" className="login-header-one">BECOME A MEMBER</h4>
                <p id="enjoy-header">Enjoy the experience of comfort by becoming part of our family.</p>
                <div className="login-div" id="member-login-div">
                    <form id="form-div" onSubmit={this.handleSubmit}>
                        <input  className="form-input"type="text" placeholder="Email" value={email} onChange={this.handleEmailChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                        <input className="form-input" type="text" placeholder="Password" value={password} onChange={this.handlePasswordChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
                        <input className="form-input" type="text" placeholder="First Name" value={firstName} onChange={this.handleFirstNameChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.firstNameError}</div>
                        <input  className="form-input"type="text" placeholder="Last Name" value={lastName} onChange={this.handleLastNameChange}/>
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.lastNameError}</div>
                        <input id="form-submit" type="submit" value="Join Us"/>
                    </form> 
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(MemberForm)

import React, { Component } from 'react'
import axios from 'axios'
//import snapChatIcon from '../assets/images/icons/snapchat2.png'
import twitterIcon from '../assets/images/icons/twitter.png'
import youtubeIcon from '../assets/images/icons/youtube.png'
import facebookIcon from '../assets/images/icons/facebook.png'
import linkedInIcon from '../assets/images/icons/linkedin.png'
import instagramIcon from '../assets/images/icons/instagram.png'
import './Footer.css'

export class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            emailError: ''
        }

        this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOnChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    validate = () => {
        let emailError = ''

        if(!this.state.email.includes('@')) {
            emailError = 'Invalid Email'
        }

        if(emailError) {
            this.setState({ emailError })
            return false
        }
        return true
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(`userEmail: ${this.state.email}`)

        const newEmail = {email: this.state.email}

        axios.post(`http://localhost:4000/postemail`, newEmail)
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
                    emailError: ''
                })

            }
        
    }

    render() {
        const { email } = this.state
        return (
                <div className="footer-div">
                    <div className="upper-footer">
                        <ul className="footer-list light-color" id="first-list">
                            <li>Company</li>
                            <li>About</li>
                            <li>Affiliates</li>
                            <li>Visit Us</li>
                            <li>Reviews</li>
                        </ul>
                        <ul className="footer-list" id="second-list">
                            <li className="light-color">HELP</li>
                            <li>Order Status</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul className="footer-list" id="third-list">
                            <li className="light-color">GIFTS</li>
                            <li>Promoting</li>
                            <li>Find A Store</li>
                            <li>Become A Member</li>
                            <li>Site Feedback</li>
                        </ul>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input className="footer-input" type="text" placeholder="Email" value={email} onChange={this.handleOnChangeEmail}/>
                                <input className="footer-submit" type="submit" value="submit"/>
                                <div style={{ fontSize: 12, color: 'red' }}>{this.state.emailError}</div>
                            </form>
                            <ul id="social-list">
                                <li>
                                    <img src={twitterIcon} alt="pic"/>
                                </li>
                                <li>
                                    <img src={instagramIcon} alt="pic"/>
                                </li>
                                <li>
                                    <img src={linkedInIcon} alt="pic"/>
                                </li>
                                <li>
                                    <img src={youtubeIcon} alt="pic"/>
                                </li>
                                <li>
                                    <img src={facebookIcon} alt="pic"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lower-footer container-fluid">
                        <div className="container-fluid">
                            <p className="float-left light-color">	&copy; 2020 Comfort Shoes, Inc. All Rights Reserved</p>
                            <ul className="float-right" id="terms-items-div">
                                <li>Guides</li>
                                <li>Terms of Sale</li>
                                <li>Terms of Use</li>
                                <li>Comfort Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}

export default Footer

import React, { Component } from 'react'
import './JoinUs.css'

export class JoinUs extends Component {
    render() {
        return (
            <div className="join-us-div">
                <p>Enjoy our classic and new products for less</p>
                <h3>Become A Member</h3>
                <a className="btn" href="/member-form" role="button">Join</a>
            </div>
        )
    }
}

export default JoinUs

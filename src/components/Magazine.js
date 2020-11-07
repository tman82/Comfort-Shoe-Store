import React, { Component } from 'react'
//import ukftLogo from '../assets/images/fashion/ukft.png'
import britishLogo from '../assets/images/fashion/british.png'
import onOffLogo from '../assets/images/fashion/on-off.png'
import ukLogo from '../assets/images/fashion/uk.png'
//import monkLogo from '../assets/images/fashion/monk3.png'
import zaraLogo from '../assets/images/fashion/zara1.png'
//import vogueLogo from '../assets/images/fashion/vogue2.png'
import poseLogo from '../assets/images/fashion/pose2.png'
import './Magazine.css'


export class Magazine extends Component {
    render() {
        return (
            <div className="magazine-div">
                <div>
                    <img className="img-fluid" src={zaraLogo} alt="pic"/>
                </div>
                <div>
                    <img className="img-fluid" src={britishLogo} alt="pic"/>
                </div>
                <div>
                    <img className="img-fluid" src={onOffLogo} alt="pic"/>
                </div>
                <div>
                    <img className="img-fluid" src={ukLogo} alt="pic"/>
                </div>
                <div>
                    <img className="img-fluid" src={poseLogo} alt="pic"/>
                </div>
            </div>
        )
    }
}

export default Magazine

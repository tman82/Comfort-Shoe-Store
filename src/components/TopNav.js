import React, { Component } from 'react'
import { BrowserRouter as Link, NavLink } from "react-router-dom";
//import AboutUs from '../components/AboutUs'
import BottomNav from '../components/BottomNav.js'
import { connect } from 'react-redux'
import { getNumbers } from '../actions/getAction'
import comfortPng from '../assets/images/icons/comfort3.png'
import '../components/TopNav.css'


export class TopNav extends Component {
   constructor(props) {
    super(props)

    this.state = {
        shoeProducts: []
    }
   }

    componentDidMount() {
       getNumbers()
    }
    
    render() {
        
        return (
            <React.Fragment>
            <div>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <a className="navbar-brand" href="/"><img className="img-fluid" src={comfortPng} alt="pic"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/login">Member LogIn</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/member-form">Join</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item cart">
                                    <NavLink to="/cart" className="link-div">
                                        <ion-icon id="basket-icon" name="basket-outline"></ion-icon>
                                        <div id="span-div">
                                            <span id="number-span">{this.props.basketProps.basketNumbers}</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <BottomNav />  
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(TopNav)

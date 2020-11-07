import React, { Component } from 'react'
import axios from 'axios'
import Hero3 from '../assets/images/shoes/heroes/hero3.png'
import './Hero.css'


export class Hero extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shoes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shoes')
            .then(res => {
                const shoesData = res.data
                this.setState({
                    shoes: shoesData
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    render() {
        const { shoes } = this.state
        const heroPhoto = shoes.map((shoe) => {
            if(shoe.name === 'hero2') {
                return <div key={shoe._id}>
                            <img src={shoe.image} alt="pic"/>
                       </div> 
            } else {
                return null
            }
        })

        console.log(heroPhoto[1])
        return (
            <div className="main-hero-div" style={{ backgroundImage: `url(https://res.cloudinary.com/tretesting/image/upload/v1591835766/heroes/hero3_rcc3s3.png)`,  backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="sub-hero-div">
                    <h3>Live Comfortably With Our Shoes</h3>
                    <p>For 40 years we have provided people with the most comfortable shoes ever made. If you love 
                        comfortable shoes this is the place for you.
                    </p>
                    <a className="btn" href="/shop" role="button">SHOP</a>
                </div>
            </div>
        )
    }
}

export default Hero

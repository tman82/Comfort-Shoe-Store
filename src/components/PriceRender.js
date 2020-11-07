import React, { Component } from 'react'
import './PriceRender.css'

export class PriceRender extends Component {
    render() {
        return (
            <div>
                <p>Price</p>
                <div className="price-clicker">$120</div>
                <div className="price-clicker">$180</div>
                <div className="price-clicker">$200</div>
            </div>
        )
    }
}

export default PriceRender

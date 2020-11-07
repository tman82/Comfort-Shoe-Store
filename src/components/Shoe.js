import React, { Component } from 'react'


export class Shoe extends Component {
    
    render() {
        const { shoes } = this.props
        let eachShoe = shoes.map(shoe => {
            return (
                    <div key={shoe._id}>
                        <img src={shoe.image} alt="pic"/>
                        <p>{shoe.name}</p>
                        <p>{shoe.color}</p>
                        <p>${shoe.price}</p>
                    </div>
            )
        })
        return (
            <div>
                {eachShoe}
            </div>
        )
    }
}

export default Shoe

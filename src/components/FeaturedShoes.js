import React, { Component } from 'react'
//import { Container } from 'reactstrap'
import './FeaturedShoes.css'
import axios from 'axios'

export class FeaturedShoes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoePhotos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shoes')
        .then(res => {
            const photoData = res.data
            this.setState({
                shoePhotos: photoData
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        const { shoePhotos } = this.state
        const featuredPhotos = shoePhotos.map((photo) => {
            if(photo.featured === true) {
                return <div className="shoe-div col-xs-12 col-sm-12 col-md-4 col-lg-4" key={photo._id}>
                            <div className="each-shoe">
                                <img className="img-fluid" src={photo.midImage} alt="pic"/>
                                <p className="name-p">{photo.name}</p>
                                <p className="price-p">${photo.price}</p>
                            </div>
                       </div>
            } else {
                return null
            }
        })

        return (

                <div className="container feature-container">
                    <div className="row feature-row">
                        <div className="col feature-col">
                            <h3 id="feature-title">FEATURED SHOE</h3>
                            <div className="featured-shoes-div">
                                    {featuredPhotos}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default FeaturedShoes

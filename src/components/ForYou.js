import React, { Component } from 'react'
//import { Container } from 'reactstrap'
import axios from 'axios'
import './ForYou.css'

export class ForYou extends Component {
    constructor(props) {
        super(props)

        this.state = {
            forYouPics: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/shoes')
            .then(res => {
                const photoData = res.data
                this.setState({
                    forYouPics: photoData
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { forYouPics } = this.state
        let forYouPhotos = forYouPics.map((photo) => {
            if(photo.heroFeatured === true) {
                return <div key={photo._id} className="for-you-block lg-6">
                                <div className="for-style" style={{ backgroundImage: `url(` + photo.image + `)` }}>
                                    <div className="message-btn-div">
                                        <p className="photo-message"><i>{photo.message}</i></p>
                                        <a className="btn shop-btn" href="/shop" role="button">SHOP</a>
                                    </div>
                                </div> 
                       </div>
            } else {
                return null
            }
        })

        return (
                <div className="container-fluid for-you-container">
                    <div className="row">
                        <div className="col">
                            <div className="for-you-div">
                                {forYouPhotos}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ForYou

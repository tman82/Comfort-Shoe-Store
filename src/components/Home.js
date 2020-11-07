import React, { Component } from 'react'
import Hero from './Hero'
import JoinUs from './JoinUs'
import FeaturedShoes from './FeaturedShoes'
import ForYou from './ForYou'
import Magazine from './Magazine'
import Footer from './Footer'
//import UploadPhoto from './UploadPhoto'


export class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <JoinUs />
                <FeaturedShoes />
                <ForYou />
                <Magazine />
                <Footer />
            </div>
        )
    }
}

export default Home

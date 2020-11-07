import React, { Component } from 'react'
import blazorImage from '../assets/images/shoes/heroes/sub-hero-member1-b.png'
import probeImage from '../assets/images/shoes/heroes/sub-hero-member2-b.png'
import cycleImage from '../assets/images/shoes/heroes/sub-hero-member3-b.png'
import Article from '../components/Article'
import FeaturedMembers from '../components/FeaturedMembers'
import Footer from '../components/Footer'
import userPng from '../assets/images/icons/user.png'
import './MemberArea.css'


export class MemberArea extends Component {
    render() {
        const specialProducts = [
            { id: 1, shoeName: 'Blazor One', shoeImage: blazorImage},
            { id: 2, shoeName: 'Probe Three', shoeImage: probeImage},
            { id: 3, shoeName: 'Cycle Five', shoeImage: cycleImage}
        ]

        const productStyle = {
            display: 'inline-block',
        }

        const showSpecialProducts = specialProducts.map((product) => {
            return <ul className="product-list" key={product.id} style={productStyle}>
                    <li key={product.id}>
                        <img className="img-fluid" src={product.shoeImage} alt="pic"/>
                        <p id="shoe-name">{product.shoeName}</p>
                        <a href="/shop">$120</a>
                    </li>
                   </ul>  
        })
        return (
            <React.Fragment>

                <div className="container-fluid">
                    <div className="member-area-div">
                        <div id="profile-div">
                            <div id="profile-top">
                                <div>
                                    <img id="user-icon" src={userPng} alt="icon"/><span className="bold-text">Marcus Johnson</span>
                                    <p id="member-p">Proud member <span className="bold-text">since 2016</span></p>
                                    <p id="proud-p">Four Years a member</p>
                                </div>
                            </div>
                        </div>
                        
                        <div id="life-div">
                            <ul>
                                <li>Love.</li>
                                <li>Life.</li>
                                <li>Comfort.</li>
                            </ul>
                        </div>
                    </div>
                    <div id="special-div">
                        {showSpecialProducts}
                    </div>
                </div>

                <Article />
                <FeaturedMembers />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MemberArea

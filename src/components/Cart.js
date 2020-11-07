import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'
//import ShopNav from '../components/ShopNav'

function Cart({basketProps}) {
    console.log(basketProps)
    return (
        <div>
            <h1>Cart Page </h1>
            <Footer />
        </div>
    )    
}

const mapStateToProps = state => ({
    basketProps: state.basketProps
})

export default connect(mapStateToProps)(Cart)

import React, { Component } from 'react'
import axios from 'axios'
//import ShopNav from '../components/ShopNav'
import FilterPanel from '../components/FilterPanel'
//import Comfortable from './Comfortable'
//import Casual from './Casual'
//import Minimal from './Minimal'
//import Footer from './Footer'
import '../components/FilterPanel'
import './Shop.css'

export class Shop extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" id="shop-component">
                    <div className="filter-panel-div">
                        <FilterPanel />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Shop

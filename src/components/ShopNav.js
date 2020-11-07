import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comfortable from '../components/Comfortable'
import Casual from '../components/Casual'
import Minimal from '../components/Minimal'
import '../components/ShopNav.css'

export class ShopNav extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid" id="shop-nav">
                    <nav>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/comfortable" className="nav-link">Comfortable</Link>
                                </li>
                                <li>
                                    <Link to="/casual" className="nav-link">Casual</Link>
                                </li>
                                <li>
                                    <Link to="/minimal" className="nav-link">Minimal</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <Route path="/comfortable" component={Comfortable} />
                <Route path="/casual" component={Casual} />
                <Route path="/minimal" component={Minimal} />
            </Router>
        )
    }
}

export default ShopNav

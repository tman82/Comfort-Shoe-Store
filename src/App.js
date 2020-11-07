import React from 'react';
//import UploadPhoto from './components/UploadPhoto'
import TopNav from './components/TopNav'
import Home from './components/Home'
import MemberArea from './components/MemberArea'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux'
import store from './store.js'

import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from './components/Cart'
import LogIn from './components/LogIn'
import Shop from './components/Shop'
import MemberForm from './components/MemberForm'
import './components/TopNav.css'

import './App.css';


export class App extends React.Component {
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
    return(
            <Provider store={store}>
                <Router>
                    <TopNav />
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/member-form" component={MemberForm} />
                    <Route path="/memberarea" component={MemberArea} />
                    <Route path="/cart" component={Cart} />
                </Router>
            </Provider>
    )
  }
}

export default App;

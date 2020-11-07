import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBasket } from '../actions/addAction'
//import { getItems } from '../actions/itemAction'
//import PropTypes from 'prop-types'
import axios from 'axios'
import './FilterPanel.css'


export class FilterPanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "",
            shoes: []
        }

        this.handleColorChange = this.handleColorChange.bind(this)
    }

    componentDidMount() {
        //this.props.getItems()

        axios.get('http://localhost:4000/shoes')
            .then(res => {
                const shoeData = res.data
                this.setState({
                    shoes: shoeData
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleColorChange(e) {
        const color = e.target.value
        console.log(color)
        this.setState({
            color: color
        })
    }

    render() {
        console.log(this.props)
        const { shoes } = this.state
        const colors = ["Black", "Blue", "Brown", "Gray", "Green", "Red", "White"]
        /*const shoesToShow = shoes.map(item => {
            if (item.mainColor === this.state.color) {
                return <div key={item._id} className="each-shoe-div col-sm-6 col-md-6 col-lg-3">
                        <div>
                            <img className="img-fluid image" src={item.image} alt="pic"/>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p onClick={ () => this.props.addBasket(item.name)} className="basket-p">Add to cart</p> 
                        </div>
                       </div>
            } else {
                return null
            }
        })*/
        
        const loadShoes = shoes.map(shoeItem => {
            if (shoeItem.price) {
                return <div key={shoeItem._id} className="img-fluid image each-shoe-div col-sm-6 col-md-6 col-lg-3">
                            <img src={shoeItem.image} className="img-fluid" alt="pic"/>
                            <p className="first-p">{shoeItem.name}</p>
                            <p className="second-p">${shoeItem.price}</p>
                            <p onClick={() => this.props.addBasket(shoeItem)} className="basket-p">Add to cart</p>
                       </div>  
            }  else {
                return null
            }   
        })
        

        console.log(this.props)
        
        return (
            <React.Fragment>
                <div className="form-div">
                    <form>
                        {colors.map((color, index) => (
                            <label className="label-item" key={index}>
                                {color}
                                <input
                                    value={color}
                                    checked={this.state.color === color}
                                    onChange={this.handleColorChange}
                                    type="checkbox"
                                />
                            </label>
                        ))}
                    </form>
                </div>
                <div className="filtered-shoes">
                    <div className="load-shoe-div">
                        {loadShoes}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
/*
FilterPanel.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}*/


/*const mapStateToProps = (state) => ({
    item: state.basketState
})

export default connect(mapStateToProps, { getItems })(FilterPanel)
*/

function mapDispatchToProps(dispatch) {
    return {
        addBasket: (param) => dispatch(addBasket(param))
    }
}


export default connect(null, mapDispatchToProps)(FilterPanel)

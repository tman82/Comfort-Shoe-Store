import React, { Component } from 'react'
import './ColorButtons.css'

export class ColorButtons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: ''
        }

        this.onRadioChange = this.onRadioChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onRadioChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <p>Color</p>

                    <ul className="color-button-list">
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="black"
                                    checked={this.state.color === "black"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="blue"
                                    checked={this.state.color === "blue"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="brown"
                                    checked={this.state.color === "brown"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="gray"
                                    checked={this.state.color === "gray"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="green"
                                    checked={this.state.color === "green"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="plaid"
                                    checked={this.state.color === "plaid"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="red"
                                    checked={this.state.color === "red"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                        <li>
                            <label>
                                <input 
                                    type="radio"
                                    value="white"
                                    checked={this.state.color === "white"}
                                    onChange={this.onRadioChange}
                                />
                            </label>
                        </li>
                    </ul>
                    <button type="submit">Choose Color</button>
                </form>
            </div>
        )
    }
}

export default ColorButtons

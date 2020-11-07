import React, { Component } from 'react'
import axios from 'axios'
import './FeaturedMembers.css'


export class FeaturedMembers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(res => {
                const userData = res.data
                this.setState({
                    members: userData
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { members } = this.state
        const getMembers = members.map(member => {
            return  <div className="pic" key={member._id}>
                            
                                <div>
                                    <img className="img-fluid" src={member.image} alt="pic"/>
                                    <p id="member-name">{member.firstName} {member.lastName}</p>
                                    <p className="bio-p">{member.bio}</p>
                                    <a className="blog-btn" href="/memberarea">Blog</a>
                                </div> 
                            
                    </div>
            
        })
        return (
            <div className="container-fluid" id="member-div">
                <div className="row">
                    <div className="block block1 col-sm-12 col-md-6 col-lg-6">
                        {getMembers[0]}
                    </div>
                    <div className="block block2  col-sm-12 col-md-6 col-lg-6">
                        {getMembers[1]}
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedMembers

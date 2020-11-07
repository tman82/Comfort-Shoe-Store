import React, { Component } from 'react'
import BigPic1 from '../assets/images/fashion/article-photos/article-pic4.png'
import './Article.css'


export class Article extends Component {
    render() {
        return (
            <div>
                <div id="big-picture-div" style={{ backgroundImage: `url(../assets/images/fashion/article-photos/article-pic3.png)` }}>
                    <img className="img-fluid" src={BigPic1} alt="pic"/>
                </div>
                <div id="statement-div">
                    <div id="statement-block">
                        <h4 id="statement-title">A fashion statement for all</h4>
                        <p id="statement-p">In today's fashion world shoes have to be more versatile than ever. Unless you stay home all the time, it's likely that you have to wear shoes of some sort
                        every day. The designers of the fashion world have responded with shoes for every occasion. We've made it our mission
                        to help bring those designers to you.</p>  
                        <a className="statement-btn" id="more-btn" href="/memberarea">More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article

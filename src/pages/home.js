import "../styles/home.css"
import React, { Component } from 'react'
import Topcon from '../components/topcon'
import Shoplistfu from '../components/shoplistfu'
import Banner from '../components/banner'
import Activefu from '../components/activefu'
import Goodtimefu from '../components/goodtimefu'
import Tworouter from '../components/tworouter'
import Contentfu from '../components/contentfu'

export default class index extends Component {
    render() {
        return (
            <div className="homeBox">
                <Topcon/>  
                <Shoplistfu/>
                <Banner/>
                <Activefu/>  
                <Goodtimefu/>
                <Tworouter/>
                <Contentfu/>
            </div>
        )
    }
}

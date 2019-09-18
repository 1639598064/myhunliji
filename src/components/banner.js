import "../styles/banner.css"
import React, { Component } from 'react'
import BannerImg from '../img/11.png';

export default class banner extends Component {
    render() {
        // const backg={
        //     background:`url(${require("../assets/images/12.png")})`
        // }
        return (
            <div className="bannerBox">
               <img src={BannerImg} /> 
               {/* <p>
                    <img src="logo192.png"/>
               </p> */}
               {/* <p>
                   <img src={require("../assets/images/12.png")} />
               </p> */}
               {/* <div className="backgo" style={backg}>
                    背景图设置
               </div> */}
            </div>
        )
    }
}

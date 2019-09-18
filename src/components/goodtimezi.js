import "../styles/goodtimezi.css"
import React, { Component } from 'react'

export default class goodtimezi extends Component {
    componentWillMount() {
        console.log( this.props.dataobj)
    }
    
    render() {
        return (
            <div className="timeziBox">
                <h2>良辰吉市</h2><span className="boxSpan">|&nbsp;婚礼纪自营品牌</span>
                { 
                    this.props.dataobj.map((v,i)=>{
                        return(
                                <div key={i} className="timezi">
                                    <img src={v.imga}/>
                                    <h4>{v.title}</h4>
                                    <span>￥{v.price}</span>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

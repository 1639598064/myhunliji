import "../styles/shoplistzi.css"
import React, { Component } from 'react'


export default class shoplistzi extends Component {
    render() {
        return (
            <div className="listziBox">  
                {
                    this.props.dataobj.map((v,i)=>{
                        return(
                                <div className="listzi">
                                    <img src={v.imga}/>
                                    <span>{v.title}</span>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

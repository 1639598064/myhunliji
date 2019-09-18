import "../styles/activezi.css"
import React, { Component } from 'react'

export default class activezi extends Component {
    render() {
        return (
            <div className="activeBox">
                 {
                    this.props.dataarr.map((v,i)=>{
                        return(
                                <div className="active">
                                    <img src={v.imgb}/>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

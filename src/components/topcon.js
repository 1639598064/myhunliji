import "../styles/topcon.css"
import React, { Component } from 'react'
import { Icon } from 'antd';
import { BrowserRouter, Route,Link,NavLink,Redirect} from 'react-router-dom';

export default class topcon extends Component {
    render() {
        return (
            <div className="topBox">
                <span className="chazhao"><Icon type="search" /></span>
                <input type="text" placeholder="搜索想要的商品"/>
                <span className="icon icon_left"><Icon type="shopping-cart" /></span>
                <span className="icon icon_right"><Icon type="mail" /></span>
            </div>
        )
    }
}

import "../styles/router.css"
import React, { Component } from 'react'
import { ConfigProvider, DatePicker, message } from 'antd';
import { Icon } from 'antd';
import { BrowserRouter, Route,Link,NavLink,Redirect} from 'react-router-dom';


export default class router extends Component {
    render() {
        return (
            <div className="bom">
               <NavLink to="/shouye" activeClassName="yanse">
                  <p className="icons_router"><Icon type="home" /></p>
                  <p>首页</p>
               </NavLink>
               <NavLink to="/bride" activeClassName="yanse">
                   <p className="icons_router"><Icon type="message" /></p>
                   <p>新娘说</p>
               </NavLink>
               <NavLink to="/home" activeClassName="yanse">
                   <p className="icons_router"> <Icon type="shopping" /></p>
                   <p>婚品11.11</p>
               </NavLink>
               <NavLink to="/collect" activeClassName="yanse">
                    <p className="icons_router"><Icon type="book" /></p>
                    <p>收藏</p>
               </NavLink>
               <NavLink to="/ours" activeClassName="yanse">
                   <p className="icons_router"><Icon type="usergroup-add" /></p>
                   <p>我们</p>
               </NavLink>
            </div>
        )
    }
}

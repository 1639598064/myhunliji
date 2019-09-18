import "../styles/tworoouter.css"
import React, { Component } from 'react'
import { BrowserRouter, Route,Link,NavLink,Redirect} from 'react-router-dom';
import A from '../components/twoall/a'
import B from '../components/twoall/b'
import C from '../components/twoall/c'
import D from '../components/twoall/d'

export default class tworouter extends Component {
    render() {
        return (
            <div className="twoBox">
                    <div className="tworouter">
                        {/* <NavLink to="/home/a" activeClassName="onea">精选</NavLink> */}
                        <a href="" className="twoa">精选</a>
                        <NavLink to="/home/b" activeClassName="onea">婚纱礼服</NavLink>
                        <NavLink to="/home/c" activeClassName="onea">婚房布置</NavLink>
                        <NavLink to="/home/d" activeClassName="onea">婚鞋箱包</NavLink>
                        <NavLink to="/home/e">喜糖回礼</NavLink>
                        <NavLink to="/home/f">婚礼百货</NavLink>
                        <NavLink to="/home/g">婚庆床品</NavLink>
                        <NavLink to="/home/h">睡衣胸贴</NavLink>
                        <NavLink to="/home/i">美妆护肤</NavLink>

                        {/* <Route path="/home" component={A}/> */}
                      <div>
                            {/* <Route path="/home/a" component={A}/> */}
                            <Route path="/home/b" component={B}/>
                            <Route path="/home/c" component={C}/>
                            <Route path="/home/d" component={D}/>
                      </div>
                    </div>
               
                
            </div>
        )
    }
}

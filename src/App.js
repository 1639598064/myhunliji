import "./app.css"
import React, { Component } from 'react'
import { BrowserRouter, Route,Link,NavLink,Redirect} from 'react-router-dom';
import Home from './pages/home'
import Shouye from './pages/shouye'
import Ours from './pages/ours'
import Collect from './pages/collect'
import Bride from './pages/bride'
import Router from './components/router'

export default class home extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/home" component={Home}/>
                        <Route path="/shouye" component={Shouye}/>
                        <Route path="/ours" component={Ours}/>
                        <Route path="/collect" component={Collect}/>
                        <Route path="/bride" component={Bride}/>      
                    </div> 
                    {/* 重定向 */}
                        <Redirect to="/home"/>
                    <div className="bomBox">
                        <Router/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Goodtimezi from './goodtimezi'
import imgurl16 from '../img/16.png';
import imgurl17 from '../img/17.png';
import imgurl18 from '../img/18.png';
import imgurl19 from '../img/19.png';
import imgurl20 from '../img/20.png';
import imgurl21 from '../img/21.png';

export default class goodtimefu extends Component {
    state={
        obj:[
            {imga:imgurl16,title:"中式婚礼创意套装伴手礼",price:"9.9"},
            {imga:imgurl17,title:"结婚中式陶瓷喜碗喜杯",price:"22"},
            {imga:imgurl18,title:"中式烫金流苏喜糖盒",price:"0.48"},
            {imga:imgurl19,title:"【50个装】婚礼纪独家",price:"16"},
            {imga:imgurl20,title:"新娘家装套装 8款可选",price:"39.9"},
            {imga:imgurl21,title:"婚礼手持礼炮 3款可选",price:"6.8"}
        ]
    }
    render() {
        return (
            <div>
                <Goodtimezi dataobj={this.state.obj}/>
            </div>
        )
    }
}

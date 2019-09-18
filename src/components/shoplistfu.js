import React, { Component } from 'react'
import Shoplistzi from './shoplistzi'

import imgURL1 from '../img/1.png';
import imgURL2 from '../img/2.png';
import imgURL3 from '../img/3.png';
import imgURL4 from '../img/4.png';
import imgURL5 from '../img/5.png';
import imgURL6 from '../img/6.png';
import imgURL7 from '../img/7.png';
import imgURL8 from '../img/8.png';
import imgURL9 from '../img/9.png';
import imgURL10 from '../img/10.png'


export default class shoplistfu extends Component {
   state={
       obj:[
           {imga:imgURL1,title:"婚纱礼服"},
           {imga:imgURL2,title:"婚房布置"},
           {imga:imgURL3,title:"婚鞋箱包"},
           {imga:imgURL4,title:"喜糖回礼"},
           {imga:imgURL5,title:"婚礼百货"},
           {imga:imgURL6,title:"婚庆床品"},
           {imga:imgURL7,title:"睡衣胸贴"},
           {imga:imgURL8,title:"良辰吉市"},
           {imga:imgURL9,title:"美妆护肤"},
           {imga:imgURL10,title:"全部分类"}
       ]
   }
    render() {
        return (
            <div>
                <Shoplistzi dataobj={this.state.obj}/>
            </div>
        )
    }
}

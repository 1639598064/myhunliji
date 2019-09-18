import React, { Component } from 'react'
import Contentzi from '../components/contentzi'
import imgurl22 from '../img/22.png';
import imgurl23 from '../img/23.png';
import imgurl24 from '../img/24.png';
import imgurl25 from '../img/25.png';
export default class content extends Component {
    state={
        arr:[
            {imgb:imgurl22,title:"免邮费试纱【揽月】抹胸欧式沙根刺绣",con:true,price:"￥399",delprice:"￥1699",num:428,has:false},
            {imgb:imgurl24,title:"免邮费试纱【铃兰】",con:true,price:"￥499",delprice:"￥1899",num:598,has:false},
            {imgb:imgurl23,title:"",con:false,price:"",delprice:"",has:false},
            {imgb:imgurl25,title:"免费试纱【拂蕊】复古一字肩",con:true,price:"￥699",delprice:"￥1999",num:668,has:false}
        ]
    }
    render() {
        return (
            <div>
                <Contentzi dataarr={this.state.arr}/>
            </div>
        )
    }
}

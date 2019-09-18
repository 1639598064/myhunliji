import React, { Component } from 'react'
import Activezi from './activezi'
import imgUrl12 from '../img/12.png';
import imgUrl13 from '../img/13.png';
import imgUrl14 from '../img/14.png';
import imgUrl15 from '../img/15.png';

export default class activefu extends Component {
    state={
        arr:[
            {imgb:imgUrl12},
            {imgb:imgUrl13},
            {imgb:imgUrl14},
            {imgb:imgUrl15}
       ]
    }
    render() {
        return (
            <div>
                 <Activezi  dataarr={this.state.arr}/>
            </div>
        )
    }
}

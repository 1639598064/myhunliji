import "../styles/contentzi.css"
import React, { Component } from 'react'
import { Tag } from 'antd';
import { Icon } from 'antd';

export default class contentzi extends Component {
    state={
        obj:[]
    }
    componentDidMount() {
        // 接收父组件的传值
        let obj1 = this.props.dataarr.map(v => v)
        this.setState({ obj: [...obj1] })
    }

    fun(i, e) {
        let obj1 = this.state.obj;
        !obj1[i].has ? obj1[i].num++ : obj1[i].num--;
        // 判断是否收藏过，收藏过点击就减1，没有收藏点击加1,通过传入的has中的布尔值来判断是否收藏过
        if (!obj1[i].has) {
            e.target.parentNode.style.color="red"
        } else {
            e.target.parentNode.style.color="grey"
        }
        obj1[i].has=!obj1[i].has
        this.setState({
            obj: obj1
        })
    }
    render() {
        return (
            <div className="contentBox">
                 { 
                    //  遍历sate中的数据
                    this.state.obj.map((v,i)=>{
                        return(
                                <div key={i} className="content">
                                    <img src={v.imgb}/>
                                    <h4>
                                        {v.con==true && <Tag color="red">自营</Tag>}
                                        {v.title}
                                    </h4>
                                        <span>{v.price}</span>
                                        <del>{v.delprice}</del>
                                    <p >
                                        {v.con==true && <Icon type="star"/>}
                                        <span onClick={(e) => { this.fun(i,e)}}>{v.num}</span>
                                     </p>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}

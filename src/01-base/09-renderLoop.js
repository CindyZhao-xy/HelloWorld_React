import React, { Component } from 'react'

export default class App09 extends Component {

    state = {
        // list: ["1111", "2222", "3333"]
        list: [{
            id: 1,
            text: "1111"
        },
        {
            id: 2,
            text: "2222"
        },
        {
            id: 3,
            text: "3333"
        }]
    }

    render() {

        // var newlist = this.state.list.map(item => <li key={item}>{item}</li>)

        return (
            <div>
                <h3>10. Render Loop </h3>
                <ul>
                    {/* <h4>No.1 </h4> */}
                    {/* {this.state.list.map(item => <li key={item.id}>{item.text}</li>)} */}
                    {/* <h4>No.2 </h4>
                    {newlist} */}
                    {
                        this.state.list.map((item,index)=><li key={index}>{item.text}--{index}</li>)
                    }
                </ul>
            </div>
        )
    }
}
/*
Original js - map， 
（React原则：如无必要，勿增实体）
 */
/**
 * 为了列表的复用和重排，设置Key值，提高性能
 * 理想key, item.id
 * 不涉及到列表的增加删除，重排，设置成索引没有问题
 */
var list = ["aa", "bb", "cc"]

var newlist = list.map(item => `<li>${item}</li>`)

console.log(newlist.join(""))
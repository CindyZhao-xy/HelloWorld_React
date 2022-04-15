/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-12 14:52:21 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-04-15 15:10:23
 */

import React, { Component } from 'react'
// export { component }

export default class App03 extends React.Component {
    render(){
        return (
            <div>
                <h3>5. Hello nesting Component</h3>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return <div>child</div>
    }
}
class Navbar extends Component {
    render() {
        return <div>navbar
            <Child></Child>
        </div>
    }
}

function Swiper() {
    return <div>swiper</div>
}

const Tabbar = () => <div>tabbar</div>
import React, { Component } from 'react'

export default class App06 extends Component {
    a = 100

    render() {
        // this.handleClick2
        return (
            <div>
                <h3>&nbsp; &nbsp;Event Handler (pass parameter) </h3>
                <input />
                <button onClick={() => {
                    console.log("click1", "if there is too many logic process, not recommand", this.a)
                }}>add1</button>
                {/* 如果处理逻辑过多，不推荐这种写法 */}
                <button onMouseOver={() => {
                    console.log("plus!")
                }}>count</button>

                <button onClick={ this.handleClick2.bind(this) }>add2</button> 
                {/* 不推荐这种写法 */}
                <button onClick={this.handleClick3}>add3</button>
                {/* 推荐add3这一种 */}
                {/* there no brace after handleClick */}
                <button onClick={() => {
                    this.handleClick4() // 比较推荐 - 传参
                }}>add4</button>
            </div> 
        )
    }
    handleClick2() {
        console.log("click2",this.a)
    }
    handleClick3 = (evt) => {
        console.log("click3",this.a,evt.target)
    }
    handleClick4 = () => {
        console.log("click4",this.a)
    }
}
/*
call, chnaged this, automatically execute function
apply, 改变this，自动执行函数
bind, 改变this，不会自动执行函数，手动加入括号()执行函数
*/

/*
React并不会真正的绑定事件到每一个具体<>的元素上，二是采用事件代理的处理模式：
*/
var obj1 ={
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}

var obj2 ={
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}
obj1.getName.call(obj2)
// obj1.getName.apply(obj2)
// obj1.getName.bind(obj2)()
obj2.getName()

// var obtn = document.getElementById("btn")
// obtn.onclick=function(){
//     console.log(this)
// }

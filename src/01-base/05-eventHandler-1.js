import React, { Component } from 'react'

export default class App05 extends Component {
    a =100
    
    render() {
        return (
            <div>      
                <h3>7 Hello Event Handler (Call, Apply, Bind) </h3>         
                <input />
                <button onClick={() => {
                    console.log("click1", "if there is too many logic process, not recommand")
                }}>add1</button>

                <button onMouseOver={() => {
                    console.log("plus!")
                }}>count</button>

                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                {/* there no brace after handleClick */}
                <button onClick={() => {
                    this.handleClick4() // better one
                }}>add4 </button>
            </div>
        )
    }
    handleClick2() {
        console.log("click2")
    }
    handleClick3 = () => {
        console.log("click3")
    }
    handleClick4 = () => {
        console.log("click4")
    }
}

// class A {
//     constructor() {
//         this.a = "111"
//         this.b = "222"
//     }

//     c = 33333

//     d = () => {

//     }

//     aaa() {

//     }

//     bbb() {
//         this.ccc();

//     }

//     ccc() {

//     }
// }

// console.log(new A())
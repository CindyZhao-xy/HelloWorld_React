import React, { Component } from 'react'

export default class App07 extends Component {
  a =100
  myref = React.createRef()

  render() {
    return (
      <div>
          <h3>8. Hello ref</h3>
          {/* <input ref="mytext" /> */}
          <input ref={this.myref} />
          <button onClick={ ()=>
        {
            // console.log("click1",this.refs.mytext.value)
            console.log("click", this.myref.current.value)
        } } >add1</button>

        <button onClick={this.handlerClick2}>add2</button>
      </div>
    )
  }

  handlerClick2=()=>{
    console.log("click2",this.myref.current.value)
  }
}

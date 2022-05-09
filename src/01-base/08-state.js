import React, { Component } from 'react'

export default class App08 extends Component {
    a = 1
    //   state = {
    //       mytext:"collect",
    //       myShow:true
    //   }

    constructor() {
        super() 
        this.state = {
            mytext: "collect",
            myShow: true,
            myname: "Cindy"
        }
    }

    render() {
        //   var text="collect"

        return (
            <div>
                <h3>9. State - {this.state.myname}</h3>

                <button onClick={() => {
                    // text="Cancel Collect" // Do not edit the statement directly
                    this.setState({
                        // mytext:"cancel collect"
                        myShow: !this.state.myShow,
                        myname: "Xinyi"
                    }) // indirect edit the statement

                    if (this.state.myShow) {
                        console.log("logic of collect")
                    } else {
                        console.log("logic of cancel collect")
                    }
                    // }}>{this.state.mytext}</button>
                }}>{this.state.myShow ? 'collect' : 'cancel collect'}</button>
                {/* <button>Collect</button> */}
            </div>
        )
    }
}

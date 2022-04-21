/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-13 9:12:43 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-04-15 20:26:24
 */

import React, { Component } from 'react'
import './css/01-index.css' //import css template

export default class App04 extends Component {
    render() {
        var myname = "Cindy"
        var obj = {
            backgroundColor:"#00ccff",
            fontSize:"30px"
        }
        return (
            <div>
                <h3>6. Hello Style of Component</h3>
                {10 + 20}-{myname}
                {10 > 20 ? 'true':' false'}
              <div style={obj}>This is Cindy</div>
            <div style={{ background:"#00cc99"}}>This is not Cindy</div>
            {/* react prefers to use built-in styles
                react considers each component to be an independent whole */}
            <div class="active">this is Cindy!!!</div>
            <div id="myapp">Style test</div>
            <label>Username: </label>
            <input type="text" id="username"/>
            </div>
        )
    }
}

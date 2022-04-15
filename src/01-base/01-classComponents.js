/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-10 10:03:30 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-04-15 11:26:19
 */

// class Test{
//     constructor(){
//         this.a=1;
//     }

//     testa(){
//         console.log("testa")
//     }
// }

// class ChildTest extends Test{
//     testb(){
//         console.log("testb")
//     }
// }

// var obj =new ChildTest()
// obj.testa()
// console.log(obj.a)

import React from 'react'
class App extends React.Component {
    render() {
        return <div><h3>3. Hello react components</h3>
            <ul>
                <li>React define components as classes or functions.</li>
                <li>To define a React component class, use extend "React.Component"</li>
                <li>render()</li>
                <p>The render() method is the only required method in  a class componet.
                    When called, it should examine [this.props] and [this.state] and return one type.
                </p>
                <li>constructor()</li>
                <p>The constructor for a React component is called before it is mounted.
                    When implementing the constructor for a [React.Component] subclass, you should call
                    [super(props)] before any other statement. Otherwise, undefined.
                </p>
                <li>componentDidMount()</li>
                <p>
                    componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
                </p>
                <li>componentDidUpdate()</li>
                <p>
                    componentDidUpdate() is invoked immediately after updating occurs. 
                    This method is not called for the initial render.
                    </p>
                <li>componentWillUnmount()</li>
                <p>componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
                    Perform any necessary cleanup in this method, such as invalidating timers, 
                    canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().</p>
                <li>keep learning...</li>
                <li>default components name can be whatever you want</li>
                <li>React 18 not support reactDOM.render anymore, use ReactDOM.createRoot instead </li>
                <li>the Componet must be Capital letter, otherwise, bugs</li>
            </ul>
        </div>
    }
    constructor(props) {
        super(props);
        this.state = {
            reptile: 'alligator',
            color: '#008f68',
        };
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.userID !== prevProps.userID) {
            this.fetchData(this.props.userID);
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // Sets that initial state
    //     };
    //     // Our event handlers
    //     this.onClick = this.onClick.bind(this);
    //     this.onKeyUp = this.onKeyUp.bind(this);
    //     // et cetera...
    // }
}
export default App
// default <name> in whatever you want
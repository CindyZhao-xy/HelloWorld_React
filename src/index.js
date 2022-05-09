/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-08 10:55:26 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-05-09 16:32:14
 */

// console.log("Hello World")
//import ReactDOM from "react-dom"; v17

import React from "react";
import ReactDOM from "react-dom/client";
import App01 from "./01-base/01-classComponents";
import App02 from "./01-base/02-functionalComponent";
import App03 from "./01-base/03-nestComponent";
import App04 from "./01-base/04-componentStyle";
import App05 from "./01-base/05-eventHandler-1";
import App06 from "./01-base/06-eventHandler-2";
import App07 from "./01-base/07-ref";
import App08 from "./01-base/08-state";
import App09 from "./01-base/09-renderLoop";


// ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"))
ReactDOM.createRoot(document.getElementById("root")).render(<h1>Hello World</h1>)

// ReactDOM.render(React.createElement("div",{id:"cindy", className:"zhao"},<h2>Cindy's JavaScript Learning Note</h2>),document.getElementById("demo"))
ReactDOM.createRoot(document.getElementById("demo")).render(React.createElement("div", { id: "cindy", className: "zhao" }, <h2>Cindy's JavaScript Learning Note</h2>))

// ReactDOM.render(<App01></App01>,document.getElementById("classComponent"))
// ReactDOM.render(</App>, document.getElementById("component")) --> another way
ReactDOM.createRoot(document.getElementById("classComponent")).render(<App01></App01>)

// ReactDOM.render(<App02></App02>, document.getElementById("functionComponent"))
ReactDOM.createRoot(document.getElementById("functionComponent")).render(<App02></App02>)

// ReactDOM.render(<App03></App03>, document.getElementById("nestingComponent"))
ReactDOM.createRoot(document.getElementById("nestingComponent")).render(<App03></App03>)

//ReactDOM.render(<App04></App04>, document.getElementById("styleComponent"))
ReactDOM.createRoot(document.getElementById("styleComponent")).render(<App04></App04>)

//ReactDOM.render(<App05></App05>, document.getElementById("eventHandler"))
ReactDOM.createRoot(document.getElementById("eventHandler1")).render(<App05></App05>)

// ReactDOM.render(<App06></App06>, document.getElementById("eventHandler"))
ReactDOM.createRoot(document.getElementById("eventHandler2")).render(<App06></App06>)

//ReactDOM.render(<App07></App07>, document.getElementById("ref"))
ReactDOM.createRoot(document.getElementById("ref")).render(<React.StrictMode><App07/></React.StrictMode>)
// <React.StrictMode><App07></App07></React.StrictMode>
/* StrictMode -> if there are multiple string refs-> to avoid potential bugs*/

ReactDOM.createRoot(document.getElementById("state")).render(<App08></App08>)

ReactDOM.createRoot(document.getElementById("renderLoop")).render(<App09></App09>)
/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-08 10:55:26 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-04-15 20:37:58
 */

// console.log("Hello World")
import React from "react";
import ReactDOM from "react-dom";

// import ReactDOM  from "react-dom/client";
import App01 from "./01-base/01-classComponents";
import App02 from "./01-base/02-functionalComponent";
import App03 from "./01-base/03-nestComponent";
import App04 from "./01-base/04-componentStyle";

ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"))
//ReactDOM.createRoot(<h1>Hello World</h1>, document.getElementById("root"))
ReactDOM.render(React.createElement("div",{id:"cindy", className:"zhao"},<h2>Cindy's JavaScript Learning Note</h2>),document.getElementById("demo"))
//ReactDOM.cerateRoot(...)
ReactDOM.render(<App01></App01>,document.getElementById("classComponent"))
// ReactDOM.render(</App>, document.getElementById("component")) --> another way
//ReactDOM.createRoot(...)

ReactDOM.render(<App02></App02>, document.getElementById("functionComponent"))

ReactDOM.render(<App03></App03>, document.getElementById("nestingComponent"))

ReactDOM.render(<App04></App04>, document.getElementById("styleComponent"))
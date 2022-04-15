/*
 * @Author: cindy.zhao 
 * @Date: 2022-04-08 10:55:26 
 * @Last Modified by: cindy.zhao
 * @Last Modified time: 2022-04-15 11:21:30
 */

// console.log("Hello World")
import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM  from "react-dom/client";
import App from "./01-base/01-classComponents";

ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"))
//ReactDOM.createRoot(<h1>Hello World</h1>, document.getElementById("root"))
ReactDOM.render(React.createElement("div",{id:"cindy", className:"zhao"},<h2>Cindy's JavaScript Learning Note</h2>),document.getElementById("demo"))
//ReactDOM.cerateRoot(...)
ReactDOM.render(<App></App>,document.getElementById("component"))
// ReactDOM.render(</App>, document.getElementById("component")) --> another way
//ReactDOM.createRoot(...)
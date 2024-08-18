import React from "react";
import ReactDOM from "react-dom";

var fName = "jujo";
var lName = "hehe";
var num = Math.floor(Math.random() * 10) + 1;
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <h2>My name is {`${fName} herhe ${lName}`}</h2>
    <h3>My lucky number is {num}</h3>
  </div>,
  document.getElementById("root")
);

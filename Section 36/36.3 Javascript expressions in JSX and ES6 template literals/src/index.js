import React from "react";
import ReactDOM from "react-dom";

var a = Math.floor(Math.random() * 10);
var fName = "Arun",
  lName = "Thatte";

ReactDOM.render(
  <h1>
    Hello {fName + " " + lName}! Your lucky number is {a}
  </h1>,
  document.getElementById("root")
);

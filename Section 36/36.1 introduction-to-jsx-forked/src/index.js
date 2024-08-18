import React from "react";
import reactDom from "react-dom";

reactDom.render(<h1>Hehehe</h1>, document.getElementById("root"));

var hehe = document.createElement("h1");
hehe.innerHTML = "hehe look I use old js to achieve the same effect";
document.getElementById("root").appendChild(hehe);

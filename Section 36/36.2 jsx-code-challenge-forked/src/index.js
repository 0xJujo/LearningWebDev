//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import reactDom from "react-dom";

var hehe = (
  <div>
    <h1>Heading here</h1>
    <ul>
      <li>Noodles</li>
      <li>Bread</li>
      <li>Butter</li>
    </ul>
  </div>
);
var documet = document.getElementById("root");
reactDom.render(hehe, documet);

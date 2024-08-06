//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import reactdom from "react-dom";

reactdom.render(
  <div>
    <h1>Hehe Food lessgooo</h1>
    <ul>
      <li>Shawarma</li>
      <li>Kebab</li>
      <li>dal khichidi</li>
    </ul>
  </div>,
  document.getElementById("root")
);

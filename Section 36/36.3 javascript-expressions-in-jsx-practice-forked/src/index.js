//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import reactDom from "react-dom";

var knn = "Jujustu Kasien";
var currDate = new Date().getFullYear();
reactDom.render(
  <div>
    <h1>Hi ma name is {knn}</h1>
    <h2>Copyright of Jujutsu tech @ {currDate}</h2>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import reactDom from "react-dom";

var time = new Date().getHours();
var style, greetn;

if (time < 12) {
  style = {
    color: "red",
  };
  greetn = "Goodmorning";
} else if (time < 17) {
  style = {
    color: "green",
  };
  greetn = "Good Afternoon";
} else {
  style = {
    color: "blue",
  };
  greetn = "Good Evening";
}
var div = (
  <div>
    <h1 style={style}>{time}</h1>
  </div>
);

reactDom.render(div, document.getElementById("root"));

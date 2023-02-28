// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("body h2");
const superEventHandler = {
  ontitle: function () {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },
  outTitle: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },
  resizeTitle: function () {
    title.style.color = colors[2];
    title.innerText = "you just resized!";
  },
  rightClick: function () {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  }
};

title.addEventListener("mouseenter", superEventHandler.ontitle);
title.addEventListener("mouseleave", superEventHandler.outTitle);
window.addEventListener("resize", superEventHandler.resizeTitle);
window.addEventListener("contextmenu", superEventHandler.rightClick);

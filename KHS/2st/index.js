const hello = document.querySelector("div.hello h1:first-child");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
hello.style.color = "white";

function handleInnerWidth() {
  const width = window.innerWidth;
  if (width <= 500) {
    document.body.style.backgroundColor = colors[0];
  } else if (width <= 1000 && width > 500) {
    document.body.style.backgroundColor = colors[1];
  } else {
    document.body.style.backgroundColor = colors[2];
  }
}
window.addEventListener("resize", handleInnerWidth);

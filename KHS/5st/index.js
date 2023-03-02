const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");
const body = document.querySelector("body");

function changeColors() {
  const firstNumber = Math.floor(Math.random() * colors.length);
  let secondNumber = Math.floor(Math.random() * colors.length);
  while (firstNumber === secondNumber) {
    secondNumber = Math.floor(Math.random() * colors.length);
  }
  const firstColor = colors[firstNumber];
  const secondColor = colors[secondNumber];
  body.style.backgroundImage = `linear-gradient(${firstColor},${secondColor})`;
}
button.addEventListener("click", changeColors);

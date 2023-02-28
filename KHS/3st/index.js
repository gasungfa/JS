document.querySelector("#Select button").addEventListener("click", numberGame);
const maxNum = document.querySelector("#Max input");
const userNum = document.querySelector("#Select input");
const resultText = document.querySelector("#result");
const realResult = document.querySelector("#real_result");

function numberGame(event) {
  event.preventDefault();
  const MaxNum = Math.ceil(maxNum.value);
  if (userNum.value === "" || maxNum.value === "") {
    resultText.innerText = "The number is not ready!";
    return;
  }
  const machineNumber = Math.floor(Math.random() * (MaxNum + 1));
  resultText.innerText =
    "You chose: " +
    userNum.value +
    ",the machine chose: " +
    machineNumber +
    ".";
  if (Number(userNum.value) === machineNumber) {
    realResult.innerText = "You won!";
  } else {
    realResult.innerText = "You lose!";
  }
}

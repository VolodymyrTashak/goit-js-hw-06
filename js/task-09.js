function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

colorValue.textContent = "#ffffff";

changeColorButton.addEventListener("click", onChangeColorButton);

function onChangeColorButton() {
  colorValue.textContent = document.body.style.background = getRandomHexColor();
}

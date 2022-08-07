const input = document.querySelector("#name-input");
const inputSpan = document.querySelector("#name-output");

input.addEventListener("input", inputChange);

function inputChange(event) {
  if (input.value === "") {
    return (inputSpan.textContent = "Anonymous");
  } else inputSpan.textContent = event.currentTarget.value;
}

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const containerButton = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
const buttonDecrement = containerButton.children[0];
const buttonIncrement = containerButton.children[2];

// Чомусь за data-action не хотіло шукати
// const buttonDecrement = document.querySelector("[data-action="decrement"]");
// const buttonIncrement = document.querySelector("[data-action="increment"]");

buttonDecrement.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
  console.log("Decrement", buttonDecrement.value);
});
buttonIncrement.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
  console.log("Increment", buttonIncrement.value);
});

// function targetButtonDecrementClickHandler() {
//   counterValue.decrement;
//   valueEl.textContent = counterValue.value;
// }
// function targetButtonIncrementClickHandler() {
//   counterValue.increment;
//   valueEl.textContent = counterValue.value;
// }

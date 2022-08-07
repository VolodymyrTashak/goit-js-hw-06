const inputEl = document.querySelector("#font-size-control");
const inputSpanEl = document.querySelector("#text");

inputEl.addEventListener("input", spanControl);

function spanControl(event) {
  inputSpanEl.style.fontSize = `${+event.currentTarget.value}px`;
  console.log(+event.currentTarget.value);
}

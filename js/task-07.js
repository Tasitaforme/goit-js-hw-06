const rangeFontSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeFontSize.addEventListener("input", () => {
  textEl.style.fontSize = rangeFontSize.value + "px";
});
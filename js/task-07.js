const rangeFontSize = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

//щоб не було скачку потрібно, щоб одразу при завантаженні сторінки шрифт рівнявся до позначки контролера
textEl.style.fontSize = `${rangeFontSize.value}px`;

rangeFontSize.addEventListener("input", () => {
  textEl.style.fontSize = rangeFontSize.value + "px";
});
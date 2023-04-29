let counter = document.querySelector("#value");

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

//*1-й варіант
// const counterValue = {
//   value: 0,
//   increment(value) {
//     this.value += 1;
//   },
//   decrement(value) {
//     this.value -= 1;
//   },
// };

// incrementBtn.addEventListener("click", () => {
//   counterValue.increment();
//   counter.textContent = counterValue.value;
// });

// decrementBtn.addEventListener("click", () => {
//     counterValue.decrement();
//     counter.textContent = counterValue.value;
// });

//*2-й варіант
// let value = 0;

// incrementBtn.addEventListener("click", () => {
//   value--;
//   counter.textContent = value;
// });

// decrementBtn.addEventListener("click", () => {
//     value++;
//     counter.textContent = value;
// });

//*3-й варіант
const counterContainer = document.getElementById('counter');
let value = 0;

counterContainer.addEventListener('click', changeCounterValue);

function changeCounterValue(event) { 
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.target === decrementBtn ? value-- : value ++;
  counter.textContent = value;
}


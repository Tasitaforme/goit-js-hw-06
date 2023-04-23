let counter = document.querySelector("#value");

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const counterValue = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

incrementBtn.addEventListener("click", () => {
  counterValue.increment();
  counter.textContent = counterValue.value;
});

decrementBtn.addEventListener("click", () => {
    counterValue.decrement();
    counter.textContent = counterValue.value;
});


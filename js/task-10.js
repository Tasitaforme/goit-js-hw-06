function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesArea = document.querySelector('#boxes');

createBtn.addEventListener('click', getNumberCreateBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const divArray = [];
  let defaultSize = 30;
  
  for (let i = 0; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = defaultSize + 'px';
    divEl.style.height = defaultSize + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    defaultSize += 10;
    divArray.push(divEl);
  }

  boxesArea.append(...divArray);
}


function getNumberCreateBoxes(event) {
  destroyBoxes();
  createBoxes(numberInput.value);
  numberInput.value = '';
}

function destroyBoxes() {
  boxesArea.innerHTML = '';
}




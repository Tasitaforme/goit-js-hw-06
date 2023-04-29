function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('#controls input');
const boxesArea = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', getNumberCreateBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getNumberCreateBoxes(event) {
  if (
      Number(numberInput.value) < Number(numberInput.min) ||
      Number(numberInput.value) > Number(numberInput.max)
    ) {
      return;
  };
  
  createBoxes(numberInput.value);
  numberInput.value = '';
}

function destroyBoxes() {
  boxesArea.innerHTML = '';
}

//*1-й варіант
// function createBoxes(amount) {
//   const divArray = [];
//   let defaultSize = 30;
  
//   for (let i = 0; i < amount; i += Number(numberInput.step)) {
//     const divEl = document.createElement('div');
    
//     divEl.style.width = defaultSize + 'px';
//     divEl.style.height = defaultSize + 'px';
//     divEl.style.backgroundColor = getRandomHexColor();
//     defaultSize += 10;
//     divArray.push(divEl);
//   }

//   boxesArea.append(...divArray);
// };

//*2-й варіант (через шаблонний рядок)
function createBoxes(amount) {
  const divArray = [];
  let defaultSize = 30;

  for (let i = 0; i < amount; i += Number(numberInput.step)) {
    const divEl = `<div style = 'width:${defaultSize}px; height:${defaultSize}px; background-color:${getRandomHexColor()};'></div>`;
    defaultSize += 10;
    divArray.push(divEl);
  };

  const divMarkup = divArray.join('');
  console.log(divMarkup);

  boxesArea.insertAdjacentHTML('beforeend', divMarkup);
};





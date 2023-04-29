const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listArea = document.querySelector("#ingredients");

//*1-й варіант
// const listElements = [];
// ingredients.forEach(el => {
//   const listEl = document.createElement('li');
//   listEl.textContent = el;
//   listEl.classList.add('item');
//   listElements.push(listEl);
// });

//*2-й варіант
const listElements = ingredients.map(el => {
  const listEl = document.createElement('li');
  listEl.textContent = el;
  listEl.classList.add('item');
  return listEl;
});

listArea.append(...listElements);
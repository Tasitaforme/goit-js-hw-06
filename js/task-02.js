const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listArea = document.querySelector("#ingredients");
const listElements = [];

ingredients.forEach(el => {
  const listEl = document.createElement('li');
  listEl.textContent = el;
  listEl.classList.add('item');
  listElements.push(listEl);
});

listArea.append(...listElements);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.querySelector("#ingredients");

const listEl = ingredients.map(ListItemName => {
  const itemlistEl = document.createElement("li");
  itemlistEl.textContent = ListItemName;
  itemlistEl.classList.add("item");
  return itemlistEl;
});
itemEl.append(...listEl);
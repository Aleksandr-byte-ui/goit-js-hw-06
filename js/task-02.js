const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const itemEl = document.querySelector("#ingredients");

const listEl = ingredients.forEach(ingredient => {
  const itemlistEl = document.createElement("li");
 itemlistEl.textContent = ingredient;
  itemlistEl.classList.add("item");
  return itemlistEl;
});
itemEl.append(...listEl);
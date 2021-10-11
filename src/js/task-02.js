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
 itemlistEl.classList.add("item");
 itemlistEl.textContent = ingredient;
 itemEl.appendChild(itemlistEl);
});

console.log(itemEl);


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const element = ingredients[i];
  const ulIngredient = document.querySelector("#ingredients");
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  console.log(itemEl);
  elements.push(itemEl);
  ulIngredient.append(...elements);
}

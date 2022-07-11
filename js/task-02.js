// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const setIngredients = function (elementNode, ingredientsArr) {
	const newItems = [];
	for (let item of ingredientsArr) {
		let li = document.createElement("li");
		li.classList.add("item");
		li.textContent = item;
		newItems.push(li);
	}
	elementNode.append(...newItems);
};

setIngredients(document.querySelector("#ingredients"), ingredients);
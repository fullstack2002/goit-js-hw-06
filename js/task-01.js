// Напиши скрипт, який:
// 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2) Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку 
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).
const categoriesList = document.querySelector("#categories").children;
// ul categories number
console.log(`Number of categories: ${categoriesList.length}`);
// <h2> and number of <li>
[...categoriesList].forEach((elem) => {
	console.log(`\nCategory: ${elem.querySelector("h2").textContent}`);
	console.log(
		`Elements: ${elem.querySelector("ul").querySelectorAll("li").length}`
	);
});
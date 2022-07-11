// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і виводить значення кольору в span.color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector("button.change-color");
const color = document.querySelector(".color");
const handleClick = () => {
	color.textContent = getRandomHexColor().toUpperCase();
	document.body.style.backgroundColor = color.textContent;
};
button.addEventListener("click", handleClick);

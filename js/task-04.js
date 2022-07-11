// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;
const buttonUp = document.querySelector("[data-action='increment']");
const buttonDown = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");
const handleClick = (event) => {
	counterValue += parseInt(event.currentTarget.textContent);
	counter.textContent = counterValue;
};
buttonUp.addEventListener("click", handleClick);
buttonDown.addEventListener("click", handleClick);

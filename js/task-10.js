// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
// колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
// скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
	amount: document.querySelector("input"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};
const createBoxes = () => {
	const size = 30;
	for (let i = 0; i < refs.amount.value; i++) {
		const newNode = document.createElement("div");
		newNode.style.width = `${size + 10 * i}px`;
		newNode.style.height = `${size + 10 * i}px`;
		newNode.style.backgroundColor = getRandomHexColor();
		refs.boxes.append(newNode);
	}
};
const destroyBoxes = () => {
	refs.boxes.innerHTML = "";
};
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

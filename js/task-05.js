// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".
const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};
const handleInput = () => {
	refs.output.textContent = refs.input.value || "Anonymous";
};
refs.input.addEventListener("input", handleInput);
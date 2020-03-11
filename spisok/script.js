let list = document.querySelector(".todo-list");
let input = document.querySelector(".todo-input");
let form = document.querySelector(".todo-form");
let priority = document.querySelector(".todo-priority");

priority.onclick = function () {
if (priority.classList.contains("is-important")) {
priority.textContent = "Обычная задача";
} else {
priority.textContent = "Важная задача";
}
priority.classList.toggle("is-important");
};

form.onsubmit = function (evt) {
evt.preventDefault();

let newElement = document.createElement("li");
if (priority.classList.contains("is-important")) {
newElement.classList.add("is-important")
};
newElement.textContent = input.value;
input.value = "";
list.append(newElement);
};
// Selecting Elements
const logo = document.querySelector(".logo");
const todo = document.querySelector(".todo");
const head = document.querySelector(".head");
const body = document.querySelector(".body");
const form = document.querySelector("form");
const inputField = document.getElementById("task");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".list");

// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners
form.addEventListener("submit", addItem);

// Functions
function addItem(e) {
  e.preventDefault();
  const listitem = document.createElement("li");
  const paragraph = document.createElement("p")
  paragraph.classList.add("para")
  listitem.classList.add("list-item");
  paragraph.innerText = inputField.value;
  todoList.appendChild(listitem);
  inputField.value = "";
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btns")
  // Check button
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;

  listitem.appendChild(paragraph)
  listitem.appendChild(btnContainer);
  btnContainer.appendChild(deleteBtn);
  btnContainer.appendChild(checkBtn);
  checkBtn.addEventListener("click", function () {
    listitem.style.textDecoration = "line-through";
  });
  checkBtn.addEventListener("dblclick",function(){
    listitem.style.textDecoration = "none";
  })
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(listitem);
  });
}

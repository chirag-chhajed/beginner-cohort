// Selecting Elements
const logo = document.querySelector(".logo");
const todo = document.querySelector(".todo");
const head = document.querySelector(".head");
const body = document.querySelector(".body");
const form = document.querySelector("form");
const inputField = document.getElementById("task");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".list");
const alert = document.querySelector(".alert");

// Event Listeners
form.addEventListener("submit", addItem);

// Functions
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
function addItem(e) {
  e.preventDefault();
  // Creating Elements
  const listitem = document.createElement("li");
  const paragraph = document.createElement("p");
  const id = new Date().getTime().toString();
  let attr = document.createAttribute("data-id")
  attr.value = id;
  listitem.setAttributeNode(attr)
  // Adding classes
  paragraph.classList.add("para");
  listitem.classList.add("list-item");
  listitem.style.borderBottom = "1px solid black"

  paragraph.innerText = inputField.value;
  todoList.appendChild(listitem);
  inputField.value = "";
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btns");
  // Check button
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkBtn");
  checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;

  // Appending element
  listitem.appendChild(paragraph);
  listitem.appendChild(btnContainer);
  btnContainer.appendChild(deleteBtn);
  btnContainer.appendChild(checkBtn);

  // Alerting display
  displayAlert("Task added","added")
  // set local storage
  // addToLocalStorage(id,value);
  localStorage.setItem(id,inputField.value)
  // Event Listeners for Buttons
  checkBtn.addEventListener("click", function () {
    listitem.style.textDecoration = "line-through";
    displayAlert("Task Done","check")
  });
  checkBtn.addEventListener("dblclick", function () {
    listitem.style.textDecoration = "none";
    displayAlert("Task Undone","uncheck")
  });
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(listitem);
    displayAlert("Task Deleted","delete")
    // removeFromLocalStorage(id);
  });
}
setTimeout(function(){
  localStorage.clear
},3600000)

// // Local storage
// function addToLocalStorage(id, value) {
  
//   localStorage.setItem(id, inputField.value);
// }

// function getLocalStorage(){
//   return localStorage.getItem("todoList")
//   ? JSON.parse(localStorage.getItem("todoList"))
//   : [];
// }

// function removeFromLocalStorage(id) {
//   let items = getLocalStorage();

//   items = items.filter(function (item) {
//     if (item.id !== id) {
//       return item;
//     }
//   });

//   localStorage.setItem("todoList", JSON.stringify(items));
// }
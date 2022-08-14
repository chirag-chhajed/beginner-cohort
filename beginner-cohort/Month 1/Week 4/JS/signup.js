// theme selected
const red = document.getElementById("red");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const grey = document.getElementById("grey");

// Elements selected
const body = document.body;
const form = document.querySelector("body .signup-form");
const formSection = document.querySelectorAll(".form-section");
const label = document.getElementsByTagName("label");
const preloader = document.querySelector(".preloader")
// Arrays
const bgColor = ["#ffe5ec", "#f3c4fb", "#ecf39e", "#bbdefb", "#ffe169"];
const formColor = ["#ff8fab", "#3c096c", "#31572c", "#03045e","#ffa200"];
const formSec = ["#c9184a", "#7b2cbf", "#4f772d", "#4895ef","#ffd100"];
const labelColor = ["#720026", "#10002b", "#132a13", "#001233","#a63c06"];
// Event listener
red.addEventListener("click", function () {
  body.style.backgroundColor = bgColor[0];
  body.style.transition = "ease-in 400ms"
  form.style.backgroundColor = formColor[0];
  for (const i of formSection) {
    i.style.backgroundColor = formSec[0];
    i.style.transition = "ease-in 400ms"
  }
  for (const i of label) {
    i.style.backgroundColor = labelColor[0];
    i.style.transition = "ease-in 400ms"
  }
});

purple.addEventListener("click", function () {
   body.style.backgroundColor = bgColor[1];
   body.style.transition = "ease-in 400ms"
   form.style.backgroundColor = formColor[1];
   for (const i of formSection) {
     i.style.backgroundColor = formSec[1];
     i.style.transition = "ease-in 400ms"
   }
   for (const i of label) {
     i.style.backgroundColor = labelColor[1];
     i.style.transition = "ease-in 400ms"
   }
});

green.addEventListener("click", function () {
   body.style.backgroundColor = bgColor[2];
   body.style.transition = "ease-in 400ms"
   form.style.backgroundColor = formColor[2];
   for (const i of formSection) {
     i.style.backgroundColor = formSec[2];
     i.style.transition = "ease-in 400ms"
   }
   for (const i of label) {
     i.style.backgroundColor = labelColor[2];
     i.style.transition = "ease-in 400ms"
   }
});
blue.addEventListener("click", function () {
   body.style.backgroundColor = bgColor[3];
   body.style.transition = "ease-in 400ms"
   form.style.backgroundColor = formColor[3];
   for (const i of formSection) {
     i.style.backgroundColor = formSec[3];
     i.style.transition = "ease-in 400ms"
   }
   for (const i of label) {
     i.style.backgroundColor = labelColor[3];
     i.style.transition = "ease-in 400ms"
   }
});
grey.addEventListener("click", function () {
   body.style.backgroundColor = bgColor[4];
   body.style.transition = "ease-in 400ms"
   form.style.backgroundColor = formColor[4];
   for (const i of formSection) {
     i.style.backgroundColor = formSec[4];
     i.style.transition = "ease-in 400ms"
   }
   for (const i of label) {
     i.style.backgroundColor = labelColor[4];
     i.style.transition = "ease-in 400ms"
   }
});
window.addEventListener('load',function(){
  preloader.classList.add("hide-preloader")
})


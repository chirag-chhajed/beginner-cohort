// Selecting Elements
const preloader = document.querySelector(".preloader");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
let count = 0
const click = document.getElementById("click")
const button = document.getElementById("btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Random function

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Event Listener

btn.addEventListener("click", function () {
    count += 1
    click.textContent = count
  audio.play();
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  document.body.style.transition = "all ease-in-out 400ms";
  button.style.backgroundColor = hexColor;
});


window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

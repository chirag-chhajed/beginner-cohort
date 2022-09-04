// Selecting elements
const pokedex = document.querySelector(".pokedex");
const searchBar = document.querySelector(".search");
const inputField = document.getElementById("pokemon");
const search = document.querySelector("#search");
const screen = document.querySelector(".screen");
const names = document.querySelector(".name");
const screenTwo = document.querySelector(".screen-two");
const type = document.querySelector(".type-container");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const blueButton = document.querySelector(".blue-squares-container")
// Audio
const errorSound = document.getElementById("error");
const successSound = document.getElementById("success");
const themeSound = document.getElementById("theme")
const hoverSound = document.getElementById("sound")


search.addEventListener("submit", getPokemon);
function capitalizeFirstLetter(string) {
  return string.toUpperCase();
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const pokemonName = inputField.value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName(pokemonName)}`)
    .then((response) => response.json())
    .then((data) => {
      screen.style.backgroundImage = `url(${data.sprites.other["official-artwork"].front_default})`;
      screen.style.backgroundSize = "contain";
      screen.style.backgroundRepeat = "no-repeat";
      screen.style.backgroundPosition = "center";
      names.innerHTML = `<p>${capitalizeFirstLetter(pokemonName)}</p>`;
      screenTwo.innerHTML = `<p>Weight: ${data.weight}</p><p>Height: ${data.height}</p>`;
      type.innerHTML = `<p>${capitalizeFirstLetter(
        data.types[0].type.name
      )}</p>`;
      successSound.play();
    })
    .catch((err) => {
      screen.style.backgroundImage = `url(../assets/cross.png)`;
      screen.style.backgroundSize = "contain";
      screen.style.backgroundRepeat = "no-repeat";
      screen.style.backgroundPosition = "center";
      names.innerHTML = `<p>NOT A POKEMON</p>`;
      screenTwo.innerHTML = `<p>😑😑😑</p>`;
      type.innerHTML = `<p>NONE</p>`;
      errorSound.play();
    });
  e.preventDefault();
}
play.addEventListener("click",() => {themeSound.play()});
pause.addEventListener("click",() => {themeSound.pause()});
blueButton.addEventListener("click",() => {hoverSound.play()});
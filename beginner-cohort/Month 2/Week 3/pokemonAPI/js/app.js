const pokedex = document.querySelector(".pokedex");
const searchBar = document.querySelector(".search");
const inputField = document.getElementById("pokemon");
const search = document.querySelector("#search");
const screen = document.querySelector(".screen");
const names = document.querySelector(".name");
const screenTwo = document.querySelector(".screen-two")
const type = document.querySelector(".type-container")


search.addEventListener("submit", getPokemon);
function capitalizeFirstLetter(string) {
  return string.toUpperCase();
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e){
    
    const pokemonName = inputField.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName(pokemonName)}`)
    .then((response) => response.json())
    .then((data)=>{
       screen.style.backgroundImage = `url(${data.sprites.other["official-artwork"].front_default})`;
        screen.style.backgroundSize = "contain"
        screen.style.backgroundRepeat = "no-repeat"
        screen.style.backgroundPosition = "center"
        names.innerHTML = `<p>${capitalizeFirstLetter(pokemonName)}</p>`;
        screenTwo.innerHTML = `<p>Weight: ${data.weight}</p><p>Height: ${data.height}</p>`;
        type.innerHTML = `<p>${capitalizeFirstLetter(data.types[0].type.name)}</p>`;

      })
      .catch((err) => {
        screen.innerHTML = `
        <h4>Pokemon not found 😞</h4>
        `;
      })
    e.preventDefault();
}
{/* <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h3>
          <p>Weight: ${data.weight}</p>
          <p>Height: ${data.height}</p>
        </div> */}
const pokedex = document.querySelector(".pokedex");
const searchBar = document.querySelector(".search");
const inputField = document.getElementById("pokemon");
const searchBtn = document.getElementById("search");
const screen = document.querySelector(".screen");
const alert = document.getElementById("alert")

searchBar.addEventListener("submit", getPokemon);
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e){
    
    const pokemonName = inputField.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data)=>{
        screen.innerHTML = `
        <div>
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="Pokemon name"
          />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h3>
          <p>Weight: ${data.weight}</p>
          <p>Height: ${data.height}</p>
        </div>`;
      })
      .catch((err) => {
        alert.innerHTML = `
        <h4>Pokemon not found 😞</h4>
        `;
      })
    e.preventDefault();
}

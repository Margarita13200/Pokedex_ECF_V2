let pokemonContainer = document.querySelector(".pokemon-container");
let limit = 151;

//Récupérer les Pokemon via API
function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((result) => result.json())
        .then((data) => {
            console.log(data)
            createPokemon(data);
        });
}

function fetchPokemons(limit) {
    for (let i = 1; i < 152; i++) {
        fetchPokemon(i);
    }
}

//Cartes Pokemon et leurs variables
function createPokemon(pokemon) {
  let pokeCard = document.createElement("div");

  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  pokeCard.appendChild(cardContainer);

  let card = document.createElement("div");
  card.classList.add("pokemon-block");

  let spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  let sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  let number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString()}`;

  let name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;                                                         

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  //card.appendChild(types);

  cardContainer.appendChild(card);
  pokemonContainer.appendChild(pokeCard);
}

fetchPokemons(limit);
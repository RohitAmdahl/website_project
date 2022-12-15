const url = `https://pokeapi.co/api/v2/pokemon/`;

async function pokemonApi() {
  const response = await fetch(url);
  console.log(response);
  const json = await response.json();
  console.log(json);
}
pokemonApi();

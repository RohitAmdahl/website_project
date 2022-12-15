const url = `https://pokeapi.co/api/v2/pokemon/`;

async function pokemonApi() {
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    const message =

  }
  const json = await response.json();
  console.log(json);
}
pokemonApi();

const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;

async function pokemonApi() {
  try {
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
pokemonApi();

const url = `https://pokeapi.co/api/v2/pokemon/?limit=100`;
const cards = document.querySelector(".cards");
// const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
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
    const property = json.results;
    console.log(property);

    property.forEach((element) => {
      const urlArr = element.url.split("/");
      const id = (urlArr.pop(), urlArr.pop());
      cards.innerHTML += `<h1 class="name-poke">${element.name}</h1>
                           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class = "pokeimg"/> `;
    });
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
pokemonApi();
// const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;

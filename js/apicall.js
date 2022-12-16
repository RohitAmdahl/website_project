// const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
const url = `https://pokeapi.co/api/v2/pokemon/`;
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
      cards.innerHTML += `<p>${element.name}<p/>
                          <p>${element.url}<p/>
                            `;
    });
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
pokemonApi();

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
      // const urlArr = pokemon.url.split("/");
      // const id = (urlArr.pop(), urlArr.pop());
      cards.innerHTML += `<p>${element.name}<p/>
                          <p>${element.url}<p/>
                           <img src="" alt=""> `;
    });
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
pokemonApi();
// const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;

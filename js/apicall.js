const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
const cards = document.querySelector(".cards");

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
      console.log(urlArr);
      const id = (urlArr.pop(), urlArr.pop());
      console.log(id);
      cards.innerHTML += `<h1 class="name-poke text-sky-900 block text-lg">${element.name}</h1>
                             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class="object-contain h-48 w-96 col-span-1 "/> `;
    });
  } catch (error) {
    console.log("Fetch error: ", error);
  }
}
pokemonApi();

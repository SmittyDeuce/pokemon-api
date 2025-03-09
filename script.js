//https://pokeapi.co/

async function searchPokemon(event) {
    event.preventDefault(); // Prevent form submission
    const searchInput = document.getElementById("search").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`;
    
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Error connecting to Pokemon API: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data)

        displayPokemon(data);

    } catch (error) {
        console.error("Error with Pokemon API:", error);
        document.getElementById("pokemonInfo").innerHTML = "Error: Could not find Pokémon.";
    }
}

function displayPokemon(data) {
    const pokemonInfo = document.getElementById("pokemonInfo");
    const types = data.types.map(typeInfo => typeInfo.type.name).join(", ");

    pokemonInfo.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" />
    <p>ID: ${data.id}</p>
    <p><strong>Type:</strong> ${types}</p>
    `;
}

document.getElementById("searchForm").addEventListener("submit", searchPokemon);

# pokemon-api

## Pokémon Search App

## Overview

This is a simple web application that allows users to search for Pokémon by name or ID using the [PokeAPI](https://pokeapi.co/). The app fetches and displays the basic information about the Pokémon, such as its name, ID, image, and types.

### Objective

- The user can input the name or ID of a Pokémon.
- Upon clicking the submit button, the app fetches the data from the PokeAPI asynchronously.
- It then displays the Pokémon's name, image, ID, and types on the web page.
- If an invalid Pokémon name or ID is entered, an error message is displayed.

---

## Files

### `index.html`

This file contains the structure of the webpage. It includes:

1. **Input Field** - A text box for users to input the name or ID of a Pokémon.
2. **Submit Button** - A button that triggers the search when clicked.
3. **Form Element** - The form element wraps the input and button, which listens for the `submit` event to trigger the search.
4. **Styling** - Basic styling for text alignment and button appearance.
5. **Output Area** - A section (`div`) with an id of `pokemonInfo`, where the fetched Pokémon data will be displayed.


### `script.js`

This JavaScript file handles the interaction with the PokeAPI and dynamically updates the DOM. The main features of the script are:

- **Event Listener**: 
  - The script listens for the `submit` event of the form and prevents the default form submission.
  
- **Fetching Data**: 
  - It uses `async/await` to fetch Pokémon data from the PokeAPI.
  
- **Error Handling**: 
  - If the Pokémon is not found, an error message is shown to the user in the DOM.
  
- **Displaying Data**: 
  - After successfully fetching the data, it dynamically updates the DOM to show the Pokémon's name, image, ID, and type(s).
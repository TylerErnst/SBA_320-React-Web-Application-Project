import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import PokemonDisplay from "./components/PokemonDisplay";
import Form from "./components/Form";


export default function App() {

  // State to hold pokemon data
  const [pokemon, setPokemon] = useState(null);

  // Function to get pokemon
  const getPokemon = async(searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Pokemon state to the received data
      setPokemon(data);
    } catch(e) {
      console.error(e)
    }
  };

   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    getPokemon(Math.floor(Math.random() * 1025));
  }, []);

  // We pass the getPokemon function as a prop called pokemonSearch
  // We pass pokemon as props to pokemon display
  return (
    <div className="App">
      Pokemon Search
      <Form pokemonSearch={getPokemon} />
      <PokemonDisplay pokemon={pokemon} />
    </div>
  );
}
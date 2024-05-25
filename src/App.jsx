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
        `http://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setPokemon(data);
    } catch(e) {
      console.error(e)
    }
  };

   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    getPokemon(Math.floor(Math.random() * 1025));
  }, []);

  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form pokemonSearch={getPokemon} />
      <PokemonDisplay pokemon={pokemon} />
    </div>
  );
}
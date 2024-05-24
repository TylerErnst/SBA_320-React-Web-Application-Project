export default function MovieDisplay({ pokemon }){
  // Function to return loaded JSX
  const loaded = () => {
    console.log(pokemon)
    return (
      <>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.id}</h2>
        <h2>{pokemon.types[0].type.name}</h2>
        <img src={pokemon.sprites.front_default} alt='pokemon-picture' />
        
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <h1>No Pokemon to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return pokemon ? loaded() : loading();
}
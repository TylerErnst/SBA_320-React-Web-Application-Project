import Gallery from './Gallery'

export default function MovieDisplay({ pokemon }){
  // Function to return loaded JSX
  const loaded = () => {

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    console.log(pokemon)
    return (
      <>
        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
        <h2>Pokedex Number: {pokemon.id}</h2>
        {pokemon.types.map((typeInfo, index) => (
          <h2 key={index}>Type {index+1}: {capitalizeFirstLetter(typeInfo.type.name)}</h2>
        ))}
        <img src={pokemon.sprites.front_default} alt='pokemon-picture' />
        {/* <Gallery pokemon={pokemon}/> */}
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
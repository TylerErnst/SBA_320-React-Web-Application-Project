import { useEffect } from 'react'

// Function to get starships
export default async function getAllStarships() 
{
    try {
        // Make fetch request and store the response
        const response = await fetch(
            `https://swapi.dev/api/starships/`
        );
        // Parse JSON response into a JavaScript object
        const data = await response.json();
        const starshipList = data.results
        return starshipList;
    } catch(e) {
        console.error(e)
    }
  };
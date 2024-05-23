import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import StarShipCard from './components/StarShipCard'
import getAllStarships from "./services/sw-api"
const starshipList = await getAllStarships();


function App() {
  let ships = [];
  console.log(starshipList)
  starshipList.forEach((ship) => {
        ships.push(
          <StarShipCard shipName={ship.name}/>
        )
  });

  return (
    <>
      <div class='cards'>{ships}</div>
    </>
  )
}

export default App

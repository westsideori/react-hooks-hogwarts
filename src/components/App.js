import React, { useState } from "react";
import Nav from "./Nav";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";
import HogList from './HogList';
import FilterSort from './FilterSort';
import Form from "./Form"

import hogs from "../porkers_data";


function App() {

  const pigImages = {
    "Augustus Gloop": augustus_gloop,
    "Babe": babe,
    "Bailey": bailey,
    "Cherub": cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Peppa": peppa,
    "Piggy smalls": piggy_smalls,
    "Piglet": piglet,
    "Porkchop": porkchop,
    'Trouble': trouble,
    'Truffle Shuffle': truffle_shuffle
  }


  function handleAddHog(newHog) {
    const newHogs = [...hogs, newHog]
    setHogData(newHogs)
  }

  function handleAddImage(newImage) {
    console.log(newImage)
    console.log(pigImages)
    const newImages = {...pigImages, newImage }
    setHogImages((hogImages) => hogImages = newImages)
  }
  
  const [hogData, setHogData] = useState(hogs)
  const [hogImages, setHogImages] = useState(pigImages)

  function findGreasedHogs() {
    setHogData(hogs.filter((hog) => {
      return hog.greased === true;
    }))
  }

  function sortHogsByName() {
    setHogData([...hogs].sort((a, b) => (a.name > b.name) ? 1 : -1))
  }

  function sortHogsByWeight() {
    setHogData([...hogs].sort((a, b) => (a.weight > b.weight) ? -1 : 1))
  }

  return (   
    <div className="App">
      <Nav />
      <Form handleAddHog={handleAddHog} handleAddImage={handleAddImage} /><br/>
      <FilterSort hogs={hogData} findGreasedHogs={findGreasedHogs} sortHogsByName={sortHogsByName} sortHogsByWeight={sortHogsByWeight} />
      <HogList hogs={hogData} pigImages={pigImages} />
      
    </div>
  );
}

export default App;

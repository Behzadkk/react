import React from "react";
import Logo from "./components/Logo/Logo";
import BestPokemon from "./components/BestPokemon/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon/CaughtPokemon";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();
const App = () => {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon pokemonNames={pokemonNames} />
      <CaughtPokemon date={date} />
    </div>
  );
};

export default App;

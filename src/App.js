import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import BestPokemon from "./components/BestPokemon/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon/CaughtPokemon";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();
class App extends Component {
  logWhenClicked = () => console.log("It is clicked");
  render() {
    return (
      <div>
        <Logo appName="Pokedex" handleClick={this.logWhenClicked} />
        <BestPokemon pokemonNames={pokemonNames} />
        <CaughtPokemon date={date} />
      </div>
    );
  }
}

export default App;

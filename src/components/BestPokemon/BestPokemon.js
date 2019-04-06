import React, { Component } from "react";

class BestPokemon extends Component {
  render() {
    return (
      <ul>
        My favourite Pokemons are
        {this.props.pokemonNames.map((pokemon, i) => (
          <li key={i}>{pokemon}</li>
        ))}
      </ul>
    );
  }
}
export default BestPokemon;

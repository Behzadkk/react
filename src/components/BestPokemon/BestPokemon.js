import React from "react";
const BestPokemon = props => {
  return (
    <ul>
      My favourite Pokemons are
      {props.pokemonNames.map((pokemon, i) => (
        <li key={i}>{pokemon}</li>
      ))}
    </ul>
  );
};
export default BestPokemon;

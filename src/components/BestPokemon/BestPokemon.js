import React, { Component } from "react";

class BestPokemon extends Component {
  constructor(props){
    super(props)
    this.state ={
      pokemonNames :null,
      error: null,
      isLoading : true
    }
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokedex/1/").then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res
      } else {
        throw new Error('HTTP error')
      }
    })
    .then(res => res.json())
    .then(data => {
    this.setState({pokemonNames: [
      data.pokemon_entries[0].pokemon_species.name, 
      data.pokemon_entries[3].pokemon_species.name, 
      data.pokemon_entries[6].pokemon_species.name
    ], 
      isLoading : false 
    });
  }).catch(error => {
    this.setState({
      isLoading: false,
      error: error
    })
  });
}

  render() {
    if (this.state.isLoading) {
      return <span>Loading... </span>
    } else if (this.state.error) {
      return <span>Something went wrong </span>
    } else {
      return (
        <ul>
          My favourite Pokemons are
          {this.state.pokemonNames.map((pokemon, i) => (
            <li key={i}>{pokemon}</li>
          ))}
        </ul>
      );
    }
  }
}

export default BestPokemon;

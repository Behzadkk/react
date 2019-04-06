import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caughtPokemon: 0
    };
  }
  catchPokemon = () => {
    this.setState(previousState => {
      return {
        caughtPokemon: previousState.caughtPokemon + 1
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
        <p>
          Caught {this.state.caughtPokemon} Pokemon on {this.props.date}
        </p>
      </div>
    );
  }
}

export default CaughtPokemon;

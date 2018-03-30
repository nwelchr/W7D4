import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    //
    // console.log(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (!this.props.match.params.pokemonId) {
      return null;
    }
    const {
      name,
      image_url,
      attack,
      defense,
      poke_type,
      moves,
      item_ids
    } = this.props.pokemon;

    return (
      <section className="pokemon-detail">
        <figure>
          <img src={image_url} alt={name} />
        </figure>
        <ul>
          <li>
            <h2>{name}</h2>
          </li>
          <li>Type: {poke_type}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {moves}</li>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;

import React from 'react';

class PokemonIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.requestAllPokemon();
	}

	render() {
		const pokemon = this.props.pokemon;
		const pokemonItems = pokemon.map(poke => (
			<li key={poke.id}>
				{poke.name} <img src={poke.image_url} height="50" width="50" />
			</li>
		));

		return <ul>{pokemonItems}</ul>;
	}
}

export default PokemonIndex;

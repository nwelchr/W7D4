import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, image_url } = this.props.pokemon;

    return (
      <Link to={'/pokemon/' + id}>
        <li>
          {name}
          <br />
          <img src={image_url} height="50" width="50" />
        </li>
      </Link>
    );
  }
}

export default PokemonIndexItem;

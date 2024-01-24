import React from 'react';
import { Link } from 'react-router-dom';

function PokemonList({ pokemons }) {
  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;

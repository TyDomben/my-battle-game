import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    <p>Height: {pokemon.height}</p>
    <p>Weight: {pokemon.weight}</p>
    {/* Render other details */}
  </div>
  );
}

export default PokemonDetails;

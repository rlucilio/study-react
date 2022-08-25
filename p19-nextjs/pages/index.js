import React, { useEffect, useState } from 'react';

export async function getStaticProps(context) {
  const responseFromServer = await fetch('https://pokeapi.co/api/v2/pokedex/2/');
  let pokemons = [];
  if (responseFromServer.ok) {
    const responseObject = await responseFromServer.json();
    console.log(responseObject.pokemon_entries);
    pokemons = responseObject.pokemon_entries;
  }

  return {
    props: {
      pokemons,
    },
  };
}

export default function home({ pokemons }) {
  return (
    <div>
      Pokédex - Renan Lucilio
      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
        ))}
      </ul>
    </div>
  );
}

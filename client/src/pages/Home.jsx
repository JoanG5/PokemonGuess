import React, { useEffect, useState, useRef } from "react";
import { getPokemon } from "../services/PokeAPI";

function Home() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonGuess, setPokemonGuess] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState({});
  const guesses = useRef({});

  useEffect(() => {
    fetchChosenPokemon();
  }, []);

  const fetchChosenPokemon = async () => {
    const pokemon = await getPokemon(Math.floor(Math.random() * 1025));
    setChosenPokemon(pokemon);
  };

  const fetchPokemon = async (pokemon) => {
    try {
      const data = await getPokemon(String(pokemon).toLowerCase());
      if (data.id in guesses) return;
      guesses[data.id] = true;
      console.log(data);
      setPokemonGuess((prevGuesses) => [...prevGuesses, data]);

      if (data.id === chosenPokemon.id) {
        alert("You won!");
      }
    } catch (err) {
      console.log(err);
      alert("Pokemon not found");
    }
  };

  return (
    <div>
      <input type="text" onChange={() => setPokemon(event.target.value)} />
      <button onClick={() => fetchPokemon(pokemon)}>Search</button>
      <button onClick={() => fetchPokemon(Math.floor(Math.random() * 1025))}>
        Random Pokemon
      </button>
      <div>
        {pokemonGuess.map((pokemon) => (
          <div key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt="pokemon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

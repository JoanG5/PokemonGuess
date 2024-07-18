import React, { useEffect, useState, useRef } from "react";
import { getPokemon } from "../services/PokeAPI";
import PokemonCard from "../components/PokemonCard";
import { Box, ThemeProvider } from "@mui/material";

function Home() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonGuess, setPokemonGuess] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState({});
  const guesses = useRef({});
  const sx = {
    width: 100,
    height: 100,
    borderRadius: 1,
    bgcolor: "#00FF00", // green color
    "&:hover": {
      bgcolor: "#006400", // dark green color
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

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
      setPokemonGuess((prevGuesses) => [data, ...prevGuesses]);

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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => fetchPokemon(pokemon)}
      >
        Search
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => fetchPokemon(Math.floor(Math.random() * 1025))}
      >
        Random Pokemon
      </button>
      <div className="flex flex-row">
        <Box sx={sx}>
          <h1>Pokemon</h1>
        </Box>
        <Box sx={sx}>
          <h1>Type 1</h1>
        </Box>
        <Box sx={sx}>
          <h1>Type 2</h1>
        </Box>
        <Box sx={sx}>
          <h1>Height</h1>
        </Box>
        <Box sx={sx}>
          <h1>Weight</h1>
        </Box>
      </div>
      <div>
        {pokemonGuess.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonCard pokemon={pokemon} setPokemon={chosenPokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

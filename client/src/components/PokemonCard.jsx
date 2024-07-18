import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import upArrow from "../assets/upArrow.png";

function PokemonCard({ pokemon, setPokemon }) {
  const correct = {
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

  const wrong = {
    width: 100,
    height: 100,
    borderRadius: 1,
    bgcolor: "#FF0000", // red color
    "&:hover": {
      bgcolor: "#640000", // dark red color
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: `url(${upArrow})`,
    // backgroundSize: "contain",
  };

  console.log(setPokemon);

  return (
    <div className="flex flex-row">
      <Box sx={pokemon.id === setPokemon.id ? correct : wrong}>
        <img src={pokemon.sprites.front_default} alt="pokemon" />
      </Box>
      <Box
        sx={
          pokemon.types[0].type.name === setPokemon.types[0].type.name
            ? correct
            : wrong
        }
      >
        <h1 className="">{pokemon.types[0].type.name}</h1>
      </Box>
      {pokemon.types[1] ? (
        <Box
          sx={
            pokemon.types[1].type.name === setPokemon.types[1].type.name
              ? correct
              : wrong
          }
        >
          <h1>{pokemon.types[1].type.name}</h1>
        </Box>
      ) : (
        <Box sx={setPokemon.types[1] ? wrong : correct}>
          <h1>None</h1>
        </Box>
      )}
      {/* <Box
        sx={
          pokemon.types[0].type.name === setPokemon.types[0].type.name
            ? correct
            : wrong
        }
      >
        <h1>{pokemon.types[0].type.name}</h1>
      </Box> */}
      <Box sx={pokemon.height === setPokemon.height ? correct : wrong}>
        <h1>{pokemon.height * 10} cm </h1>
      </Box>
      <Box sx={pokemon.weight === setPokemon.weight ? correct : wrong}>
        <h1>{pokemon.weight / 10} kg</h1>
      </Box>
    </div>
  );
}

export default PokemonCard;

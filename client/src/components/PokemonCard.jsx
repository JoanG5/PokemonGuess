import React from "react";
import { Box, ThemeProvider } from "@mui/material";

function PokemonCard({ pokemon }) {
  const sx = {
    width: 100,
    height: 100,
    borderRadius: 1,
    bgcolor: "primary.main",
    "&:hover": {
      bgcolor: "primary.dark",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="flex flex-row">
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "#007FFF",
              dark: "#0066CC",
            },
          },
        }}
      >
        <Box sx={sx}>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
        </Box>
        <Box sx={sx}>
          <h1>{pokemon.types[0].type.name}</h1>
        </Box>
        <Box sx={sx}>
          {pokemon.types[1] ? (
            <h1>{pokemon.types[1].type.name}</h1>
          ) : (
            <h1>None</h1>
          )}
        </Box>
        <Box sx={sx}>
          <h1>{pokemon.types[0].type.name}</h1>
        </Box>
        <Box sx={sx}>
          <h1>{pokemon.height}</h1>
        </Box>
        <Box sx={sx}>
          <h1>{pokemon.weight}</h1>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default PokemonCard;

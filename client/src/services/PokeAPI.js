import axios from "axios";

export const getPokemon = async (pokemon) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const species = await axios.get(response.data.species.url);
    const evolution = await axios.get(species.data.evolution_chain.url);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("Pokemon not found");
  }
};

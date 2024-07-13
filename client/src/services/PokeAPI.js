import axios from "axios";

export const getPokemon = async (pokemon) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    return response.data;
  } catch (error) {
    console.log(error)
    alert("Pokemon not found");
  }
};

import axios from "axios";

const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then((res) => res.data.results)
    .catch((error) => console.log(error));
};

export default getPokemon;

import "./App.css";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { Col } from "antd";
import logo from "./components/statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails } from "./actions";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      let resultado = await getPokemon();
      dispatch(getPokemonsWithDetails(resultado));
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <Col span={4} offset={10}>
        <img id={"imagen"} src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;

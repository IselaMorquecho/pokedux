import "./App.css";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import logo from "./components/statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
function App() {
  const pokemons = useSelector((state) =>
    state.getIn(['data',"pokemons"], shallowEqual).toJS()
  );
  const loading = useSelector((state) => state.getIn(['ui',"loading"]));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      let resultado = await getPokemon();
      dispatch(getPokemonsWithDetails(resultado));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}

export default App;

import "./App.css";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import logo from "./components/statics/logo.svg";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
  const pokemons = useSelector((state) =>
    state.data.pokemons, shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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

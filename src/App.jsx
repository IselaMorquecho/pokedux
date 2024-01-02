import "./App.css";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { Col } from "antd";
import logo from "./components/statics/logo.svg";
import { useEffect, useState } from "react";
import getPokemon from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemons = async () => {
      let resultado = await getPokemon();
      setPokemons(resultado);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

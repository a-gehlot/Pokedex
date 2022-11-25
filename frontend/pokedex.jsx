import React from "react";
import ReactDOM from 'react-dom/client'
import * as APIUtil from './util/api_util'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import store from "./store/store"
import { selectAllPokemon } from "./reducers/selectors"

window.APIUtil = APIUtil;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.store = store;
window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<h1>Pokedex</h1>)
})


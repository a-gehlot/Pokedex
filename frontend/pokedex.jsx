import React from "react";
import ReactDOM from 'react-dom/client'
import * as APIUtil from './util/api_util'
import { receiveAllPokemon } from './actions/pokemon_actions'

window.APIUtil = APIUtil;
window.receiveAllPokemon = receiveAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<h1>Pokedex</h1>)
})


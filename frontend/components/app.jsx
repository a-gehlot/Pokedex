import { Route, Routes } from "react-router-dom"
import React from "react"
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const App = () => (
    <Routes>
        <Route path="*" element={<PokemonIndexContainer />} />
    </Routes>
)

export default App
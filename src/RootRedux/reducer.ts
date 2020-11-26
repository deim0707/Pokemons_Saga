import {combineReducers} from "redux";

import reducerPokemon from "../Pokemon/Redux/reducerPokemonList";

const rootReducer = combineReducers({
    pokemons: reducerPokemon
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

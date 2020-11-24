import {combineReducers} from "redux";

import reducerCounter from "../Components/Counter/redux/reducerCounter";
import reducerPokemon from "../Components/PokemonList/redux/reducerPokemonList";

const rootReducer = combineReducers({
    counter: reducerCounter,
    pokemons: reducerPokemon
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

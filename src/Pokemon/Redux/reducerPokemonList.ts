import {ActionsPokemon, IPokemonAction} from "./actionsPokemonList";
import {initialState, IPokemonState} from "./initialStatePokemons";


const reducerPokemon = (state = initialState, action: IPokemonAction): IPokemonState => {
    switch (action.type) {
        case ActionsPokemon.GET_POKEMON:
        case ActionsPokemon.GET_POKEMON_LIST:
            return {...state, loading: true};
        case ActionsPokemon.GET_POKEMON_ERROR:
        case ActionsPokemon.GET_POKEMON_LIST_ERROR:
            return {...state, error: true, loading: false};
        case ActionsPokemon.GET_POKEMON_SUCCESS:
            return {...state, error: false, loading: false, activePokemon: action.payload}
        case ActionsPokemon.GET_POKEMON_LIST_SUCCESS:
            return {...state, error: false, loading: false, pokemonList: action.body.results}

        default:
            return state;
    }
}


export default reducerPokemon;

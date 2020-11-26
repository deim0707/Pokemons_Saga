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
            return {
                ...state,
                loading: false,
                activePokemon: {...state.activePokemon, value: action.body}
            }
        case ActionsPokemon.GET_POKEMON_LIST_SUCCESS:
            return {...state, loading: false, pokemonList: action.body.results}
        case ActionsPokemon.CHANGE_ACTIVE_POKEMON:
            return {...state, activePokemon: {...state.activePokemon, id: action.id}}

        default:
            return state;
    }
}


export default reducerPokemon;

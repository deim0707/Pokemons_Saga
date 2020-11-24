import {ActionsPokemon, IPokemonAction} from "./actionsPokemonList";

export interface IPokemonState {
    loading: boolean,
    error: boolean,
    activePokemon: any
}

const initialState: IPokemonState = {
    loading: true,
    error: false,
    activePokemon: null
}

const reducerPokemon = (state = initialState, action: IPokemonAction): IPokemonState => {
    switch (action.type) {
        case ActionsPokemon.GET_POKEMON:
            return {...state, loading: true};
        case ActionsPokemon.GET_POKEMON_ERROR:
            return {...state, error: true, loading: false};
        case ActionsPokemon.GET_POKEMON_SUCCESS:
            return {...state, error: false, loading: false, activePokemon: action.payload}




        default:
            return state;
    }
}


export default reducerPokemon;

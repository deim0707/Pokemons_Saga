export enum ActionsPokemon {
    GET_POKEMON = "GET_POKEMON_BODY",
    GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS",
    GET_POKEMON_ERROR = "GET_POKEMON_ERROR",
    GET_POKEMON_LIST = "GET_POKEMON_LIST_BODY",
    GET_POKEMON_LIST_SUCCESS = "GET_POKEMON_LIST_SUCCESS",
    GET_POKEMON_LIST_ERROR = "GET_POKEMON_LIST_ERROR",
    CHANGE_ACTIVE_POKEMON = "CHANGE_ACTIVE_POKEMON",
}

export interface IPokemonAction {
    type: ActionsPokemon,
    id?: number,
    body?: any
    limit?: number,
    offset?: number
}

export const getPokemon = (id: number): IPokemonAction => ({
    type: ActionsPokemon.GET_POKEMON,
    id
})

export const getPokemonList = (limit: number, offset: number): IPokemonAction => ({
    type: ActionsPokemon.GET_POKEMON_LIST,
    limit, offset
})

export const changeActivePokemon = (id: number): IPokemonAction => ({
    type: ActionsPokemon.CHANGE_ACTIVE_POKEMON,
    id
})

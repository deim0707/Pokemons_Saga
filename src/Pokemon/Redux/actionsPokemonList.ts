import {IPokemonList} from "./initialStatePokemons";

export enum ActionsPokemon {
    GET_POKEMON = "GET_POKEMON_BODY",
    GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS",
    GET_POKEMON_ERROR = "GET_POKEMON_ERROR",
    GET_POKEMON_LIST = "GET_POKEMON_LIST_BODY",
    GET_POKEMON_LIST_SUCCESS = "GET_POKEMON_LIST_SUCCESS",
    GET_POKEMON_LIST_ERROR = "GET_POKEMON_LIST_ERROR",
}

export interface IPokemonAction {
    type: ActionsPokemon,
    payload?: number | {[key: string]: number}
    body?: any
}

export const getPokemon = (payload: number): IPokemonAction => ({
    type: ActionsPokemon.GET_POKEMON,
    payload
})

export const getPokemonList = (limit: number, offset: number): IPokemonAction => ({
    type: ActionsPokemon.GET_POKEMON_LIST,
    payload: {limit,offset}
})

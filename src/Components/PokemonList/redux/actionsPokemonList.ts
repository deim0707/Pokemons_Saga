export enum ActionsPokemon {
    GET_POKEMON="GET_POKEMON_BODY",
    GET_POKEMON_SUCCESS="GET_POKEMON_SUCCESS",
    GET_POKEMON_ERROR="GET_POKEMON_ERROR",
}

export interface IPokemonAction {
    type: ActionsPokemon,
    payload: number
}

export const getPokemon = (payload: number) : IPokemonAction =>({
    type: ActionsPokemon.GET_POKEMON,
    payload
})

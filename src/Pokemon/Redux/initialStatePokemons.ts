export interface IPokemonState {
    loading: boolean,
    error: boolean,
    activePokemon: ActivePokemon,
    pokemonList: any[] | null;
}

export interface ActivePokemon {
    id: number | null | undefined,
    value: any | null | undefined,
}

export const initialState: IPokemonState = {
    loading: false,
    error: false,
    activePokemon: {
        id: null,
        value: null,
    },
    pokemonList: null,
}

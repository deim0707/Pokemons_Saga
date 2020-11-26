export interface IPokemonState {
    loading: boolean,
    error: boolean,
    activePokemon: any,
    pokemonList: any[] | null;
}

export interface IPokemonList {
    next: string,
    previous: string,
    results: null,
}

export const initialState: IPokemonState = {
    loading: false,
    error: false,
    activePokemon: null,
    pokemonList: null,
}

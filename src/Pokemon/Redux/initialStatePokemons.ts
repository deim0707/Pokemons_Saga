export interface IPokemonState {
    loading: boolean,
    error: boolean,
    activePokemon: IActivePokemon,
    pokemonList: any[] | null;
}

export interface IActivePokemon {
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




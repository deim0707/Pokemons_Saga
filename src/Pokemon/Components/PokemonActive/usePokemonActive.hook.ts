import usePokemon from "../../usePokemon.hook";

interface Returned {
    activePokemon: any
}

const usePokemonActive = (): Returned => {
    const {pokemonState} = usePokemon()

    return {
        activePokemon: pokemonState.activePokemon.value
    }
}

export default usePokemonActive;

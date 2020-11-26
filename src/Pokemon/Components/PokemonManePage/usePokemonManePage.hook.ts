import usePokemon from "../../usePokemon.hook";

const usePokemonManePage = () => {
    const {pokemonState} = usePokemon()

    return {
        activePokemonId: pokemonState.activePokemon.id
    }
}

export default usePokemonManePage;

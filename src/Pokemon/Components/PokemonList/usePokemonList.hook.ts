import {useEffect} from "react";
import usePokemon from "../../usePokemon.hook";

interface IPokemon {
    name: string,
    id: number
}

interface Returned {
    pokemonList: IPokemon[] | null,
    activePokemon: number | null | undefined,
    changeSelectedPokemon: Function,
}

const usePokemonList = (): Returned => {

    const {pokemonMethods, pokemonState} = usePokemon()

    useEffect(() => {
        pokemonMethods.get_pokemon_list(15, 0)
    }, [])

    useEffect(() => {
        pokemonMethods.get_pokemon(pokemonState.activePokemon.id)
    }, [pokemonState.activePokemon.id])

    const pokemonList: IPokemon[] | null = pokemonState.pokemonList && pokemonState.pokemonList.map(pokemon => ({
        name: pokemon.name,
        id: pokemonMethods.getPokemonIdxFromLink(pokemon.url)[1]
    }))


    return {
        pokemonList,
        activePokemon: pokemonState.activePokemon.id,
        changeSelectedPokemon: pokemonMethods.change_active_pokemon,
    }
}


export default usePokemonList;

import {useEffect} from "react";
import {useHistory} from "react-router-dom";
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

    const history = useHistory();

    const {pokemonMethods, pokemonState} = usePokemon()

    useEffect(() => {
        pokemonMethods.get_pokemon_list(15, 0)
    }, [])

    useEffect(() => {
        // запрашиваем с бека информацию по активному покемону, если установлен айди активного покемона
        if (pokemonState.activePokemon.id) pokemonMethods.get_pokemon(pokemonState.activePokemon.id)
    }, [pokemonState.activePokemon.id])

    const pokemonList: IPokemon[] | null = pokemonState.pokemonList && pokemonState.pokemonList.map(pokemon => ({
        name: pokemon.name,
        id: pokemonMethods.getPokemonIdxFromLink(pokemon.url)[1]
    }))

    const changeSelectedPokemon = (id: number): void => {
        pokemonMethods.change_active_pokemon(id);
        history.push(`/pokemon/${id}`)
    }

    return {
        pokemonList,
        activePokemon: pokemonState.activePokemon.id,
        changeSelectedPokemon,
    }
}


export default usePokemonList;

import React, {useEffect} from "react";
import usePokemon from "../../usePokemon.hook";

interface PokemonList {
    name: string,
    id: number
}

interface Returned {

}

const usePokemonList = () => {

    const {pokemonMethods, pokemonState} = usePokemon()

    useEffect(() => {
        pokemonMethods.get_pokemon_list(15, 0)
    }, [])

    const pokemonList: PokemonList[] | null = pokemonState.pokemonList && pokemonState.pokemonList.map(pokemon => ({
        name: pokemon.name,
        id: pokemonMethods.getPokemonIdxFromLink(pokemon.url)[1]
    }))

    //todo вынести в редакс
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    // выделение айтема
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };


    return {
        pokemonList,
        selectedIndex,
        handleListItemClick,
    }
}


export default usePokemonList;

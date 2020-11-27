import usePokemon from "../../usePokemon.hook";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

interface Params {
    id: number | undefined
}

interface Returned {
    activePokemon: any
}

const usePokemonActive = (): Returned => {
    const {pokemonState, pokemonMethods} = usePokemon()
    const {id} = useParams() as Params;

    useEffect(() => {
        if (id && pokemonState.activePokemon.id !== id) pokemonMethods.get_pokemon(id)
    }, [pokemonState.activePokemon.id, id])

    return {
        activePokemon: pokemonState.activePokemon.value
    }
}

export default usePokemonActive;

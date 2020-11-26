import {RootState} from "../RootRedux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPokemon, getPokemonList} from "./Redux/actionsPokemonList";
import {IPokemonState} from "./Redux/initialStatePokemons";

interface Returned {
    pokemonState: IPokemonState,
    pokemonMethods: {
        get_pokemon: Function,
        get_pokemon_list: Function,
        getPokemonIdxFromLink: Function
    }
}

const usePokemon = (): Returned => {
    const dispatch = useDispatch();
    const {loading, error, activePokemon, pokemonList} = useSelector((state: RootState) => state.pokemons)

    const get_pokemon = (id: number) => dispatch(getPokemon(id));
    const get_pokemon_list = (limit: number, offset: number) => dispatch(getPokemonList(limit, offset));

    const getPokemonIdxFromLink = (link: string) => /\/(\d+)\/$/.exec(link)

    return {
        pokemonState: {
            loading,
            error,
            activePokemon,
            pokemonList,
        },
        pokemonMethods: {
            get_pokemon,
            get_pokemon_list,
            getPokemonIdxFromLink
        }
    }
}

export default usePokemon;

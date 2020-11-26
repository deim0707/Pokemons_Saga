import React, {FC} from "react";
import PokemonList from "../PokemonList/PokemonList";
import PokemonActive from "../PokemonActive/PokemonActive";
import usePokemonManePage from "./usePokemonManePage.hook";
import "./pokemonManePage.scss"

const PokemonManePage: FC = () => {
    const {activePokemonId} = usePokemonManePage()
    return (
        <div className="PokemonManePage-wrapper">
            <PokemonList/>
            {activePokemonId && <PokemonActive/>}
        </div>
    )
}

export default PokemonManePage

import React, {FC} from "react";
import {List, ListItem, ListItemText} from '@material-ui/core/';
import usePokemonList from "./usePokemonList.hook";
import "./pokemonList.scss"


const PokemonList: FC = () => {
    const {pokemonList, activePokemon, changeSelectedPokemon,} = usePokemonList();

    const pokemonListElement = pokemonList && (
        <List component="nav" aria-label="main mailbox folders">
            {pokemonList.map((pokemon) => (
                <ListItem

                    key={pokemon.name}
                    button
                    selected={activePokemon === pokemon.id}
                    onClick={() => changeSelectedPokemon(pokemon.id)}
                >
                    <ListItemText primary={pokemon.name}/>
                </ListItem>
            ))}
        </List>
    )


    return (
        <div className="PokemonList-wrapper">
            {pokemonList && (
                <List component="nav" aria-label="main mailbox folders">
                    {pokemonListElement}
                </List>
            )}

        </div>
    );
}

export default PokemonList;


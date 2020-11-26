import React, {FC} from "react";
import {List, ListItem, ListItemText} from '@material-ui/core/';
import usePokemonList from "./usePokemonList.hook";
import "./pokemonList.scss"


const PokemonList: FC = () => {
    const {pokemonList, selectedIndex, handleListItemClick} = usePokemonList();

    const pokemonListElement = pokemonList && (
        <List component="nav" aria-label="main mailbox folders">
            {pokemonList.map((pokemon, idx) => (
                <ListItem
                    key={pokemon.name}
                    button
                    selected={selectedIndex === pokemon.id}
                    onClick={(event) => handleListItemClick(event, pokemon.id)}
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


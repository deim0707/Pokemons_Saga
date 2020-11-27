import React, {FC} from "react";
import {Route, Switch} from 'react-router-dom';
import PokemonList from "../PokemonList/PokemonList";
import PokemonActive from "../PokemonActive/PokemonActive";
import "./pokemonManePage.scss"

const PokemonManePage: FC = () => {
    return (
        <Switch>
            <div className="PokemonManePage-wrapper">
                <Route path="/" component={PokemonList}/>
                <Route path='/pokemon/:id' component={PokemonActive}/>
                {/*<Route path='*' exact render={()=><div>Ой, такой страницы не существует</div>}/>*/}
            </div>
        </Switch>
    )
}

export default PokemonManePage

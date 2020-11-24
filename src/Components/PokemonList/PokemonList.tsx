import React from "react";
import {RootState} from "../../Redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {getPokemon} from "./redux/actionsPokemonList";
import "./pokemonList.scss"

const PokemonList = () => {
    const d = useDispatch();
    const {loading,error,activePokemon} = useSelector((state:RootState ) =>  state.pokemons)
    const {counter_value} = useSelector((state:RootState) => state.counter)

    return (
        <div>
            <h5>PokemonList</h5>
            <button onClick={()=>{
                d(getPokemon(counter_value))
            }}>Get pokemon</button>
            <div>
                {
                    loading ? (<div>Загрузка...</div>) : (
                        <div>
                            <h6>{activePokemon?.name}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PokemonList;

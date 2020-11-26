import { fork } from "redux-saga/effects";
import pokemonSaga from "../Pokemon/Redux/sagaPokemon";

export default function* startForkWatchers() {
    yield fork(pokemonSaga);
}

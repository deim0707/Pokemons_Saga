import { fork } from "redux-saga/effects";
import pokemonSaga from "../Components/Counter/redux/sagaPokemon";

export default function* startForkWatchers() {
    yield fork(pokemonSaga);
}

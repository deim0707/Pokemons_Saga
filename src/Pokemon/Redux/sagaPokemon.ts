import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {ActionsPokemon} from "./actionsPokemonList";
import PokemonApi from "../../api/pokemon-api";

const api = new PokemonApi();

function* getPokemon(action: any) {
    try {
        const pokemon = yield call(api.getPokemon, action.payload);
        yield put({type: ActionsPokemon.GET_POKEMON_SUCCESS, payload: pokemon});
    } catch (e) {
        yield put({type: ActionsPokemon.GET_POKEMON_ERROR, payload: e.message});
    }
}

function* getPokemonList(action: any) {
    try {
        const pokemonList = yield call(api.getPokemonList, action.payload.limit, action.payload.offset);
        yield put({type: ActionsPokemon.GET_POKEMON_LIST_SUCCESS, body: pokemonList});
    } catch (e) {
        yield put({type: ActionsPokemon.GET_POKEMON_LIST_ERROR, payload: e.message});
    }
}

/*
  Запускаем функцию Саги на каждое задиспатченное действие `ЭКШЕН`.
  Позволяет одновременно получать данные.
*/
function* pokemonSaga() {
    yield takeEvery(ActionsPokemon.GET_POKEMON, getPokemon);
    yield takeEvery(ActionsPokemon.GET_POKEMON_LIST, getPokemonList);
}

/*
  В качестве альтернативы вы можете использовать `takeLatest`.

  Не допускает одновременное получение данных пользователей. Если `ЭКШЕН`
  диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
  то этот ожидающий ответа запрос отменяется и срабатывает только последний.
*/
// function* pokemonSaga() {
//     yield takeLatest(ActionsPokemon.GET_POKEMON, fetchUser);
// }

export default pokemonSaga;

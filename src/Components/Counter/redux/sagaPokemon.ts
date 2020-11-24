import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {ActionsPokemon} from "../../PokemonList/redux/actionsPokemonList";


const getPokemonApi = async (id: number) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    try {
        return await res.json();
    } catch (err) {
        return err
    }
}

// export const sendRequest =async (method: "GET" | "POST" | "PUT" | "DELETE" | "UPDATE", url: string) => {
//     const options = {method};
//
//     const res = await fetch(url, {...options});
//     try {
//         return await res.json();
//     } catch (err) {
//         return err
//     }
// }

// TODO сделать метод для отправки саги универсальнее, отрефакторить весь существующий в покемонах код

export const sendRequest = (method: "GET" | "POST" | "PUT" | "DELETE" | "UPDATE", url: string) => async () => {
    const options = {method};

    const res = await fetch(url, {...options});
    try {
        return await res.json();
    } catch (err) {
        return err
    }
}

function* getPokemon(action: any) {
    try {
        const pokemon = yield call(getPokemonApi, action.payload);
        yield put({type: ActionsPokemon.GET_POKEMON_SUCCESS, payload: pokemon});
    } catch (e) {
        yield put({type: ActionsPokemon.GET_POKEMON_ERROR, payload: e.message});
    }
}

/*
  Запускаем функцию Саги на каждое задиспатченное действие `ЭКШЕН`.
  Позволяет одновременно получать данные.
*/
function* pokemonSaga() {
    yield takeEvery(ActionsPokemon.GET_POKEMON, getPokemon);
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

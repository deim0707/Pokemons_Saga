import {ActionsCounter, ICounterActions} from "./actionsCounter";

export interface ICounterState {
    counter_value: number
}

export const initialState: ICounterState = {
    counter_value: 1
}

const reducerCounter = (state: ICounterState = initialState, actions: ICounterActions): ICounterState => {
    switch (actions.type) {
        case ActionsCounter.CHANGE_COUNTER:
            return {...state, counter_value: actions.payload}
        default:
            return state
    }
}

export default reducerCounter;

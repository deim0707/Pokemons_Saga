import {CounterActions, ICounterActions} from "./counterActions";

export interface ICounterState {
    counter_value: number
}

export const initialState: ICounterState = {
    counter_value: 1
}

const counterReducer = (state: ICounterState = initialState, actions: ICounterActions): ICounterState => {
    switch (actions.type) {
        case CounterActions.CHANGE_COUNTER:
            return {...state, counter_value: actions.payload}
        default:
            return state
    }
}

export default counterReducer;

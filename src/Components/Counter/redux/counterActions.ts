export enum CounterActions  {
    CHANGE_COUNTER = "COUNTER_CHANGE_COUNTER"
}

export interface ICounterActions {
    type: CounterActions,
    payload: number
}

export const changeCounter = (payload: number): ICounterActions => ({
    type: CounterActions.CHANGE_COUNTER,
    payload
})

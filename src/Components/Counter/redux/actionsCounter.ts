export enum ActionsCounter  {
    CHANGE_COUNTER = "COUNTER_CHANGE_COUNTER"
}

export interface ICounterActions {
    type: ActionsCounter,
    payload: number
}

export const changeCounter = (payload: number): ICounterActions => ({
    type: ActionsCounter.CHANGE_COUNTER,
    payload
})

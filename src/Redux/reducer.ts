import {combineReducers} from "redux";

import counterReducer from "../Components/Counter/redux/reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

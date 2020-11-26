import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import startForkWatchers from "./saga";
import rootReducer from "./reducer";


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    (typeof window !== "undefined" &&
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(startForkWatchers)

export default store;

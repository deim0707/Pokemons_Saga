import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./RootRedux/store";
import PokemonManePage from "./Pokemon/Components/PokemonManePage/PokemonManePage";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <PokemonManePage/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

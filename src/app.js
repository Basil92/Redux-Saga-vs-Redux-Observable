import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {initState} from './state/initState';
import reducers from './reducers/index';
import App from './container/App';
import logger from 'redux-logger';
import './style.css'

//saga
import createSagaMiddleware from 'redux-saga';
import {eventListener} from './sagas/index';

//rx
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from './epics/index';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// let store = createStore(reducers, initState, applyMiddleware(sagaMiddleware, logger));
// sagaMiddleware.run(eventListener);

//create rx middleware
const epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(reducers, initState, applyMiddleware(epicMiddleware, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);

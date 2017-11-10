import {call, apply, put, take, race, takeEvery, takeLatest, select, fork, cancelled } from 'redux-saga/effects';
import {fetchSuccess, fetchFailed, timer } from '../actions/index';
import * as types from '../const/actionTypes';
import {delay, throttle} from 'redux-saga';

//firefox 57
//HMMMMMMMM https://twitter.com/dan_abramov/status/816244945015160832
//I backed Redux Saga—I think it’s an awesome project ...
//workers

function* eventHandler(action) {
    //const state = yield select((state)=>(state));
    const url = action.payload.url;
    const timerTask = yield fork(interval);
    let controller;
    try {
        //fetch config
        controller = new AbortController();
        let signal = controller.signal;
        //make request
        const { response } = yield race({
            //physic fetch here
            response: call(fetch, url, {signal}),
            cancel: take(types.FETCH_CANCEL)
        });
        //if ok generate action else error
        const data = yield apply(response, response.json);
        yield put(fetchSuccess(data));
    } catch (e) {
        controller.abort();
        yield put(fetchFailed());
    }
    timerTask.cancel();
};

//watchers
export function* eventListener() {
    yield takeLatest([types.FETCH_START, types.FETCH_RETRY], eventHandler);
};

function* interval() {
    while(true){
        yield call(delay, 1000);
        yield put(timer());
    }
};
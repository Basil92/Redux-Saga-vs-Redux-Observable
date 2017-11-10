import {Observable} from 'rxjs/Observable';
import * as types from '../const/actionTypes';
import {
    fetchSuccess,
    timer,
} from '../actions/index';
import {combineEpics} from 'redux-observable';
import Rx from 'rxjs';
import {ajax} from 'rxjs/observable/dom/ajax';

function fetchEpic(action$) {
    return action$.ofType(types.FETCH_START, types.FETCH_RETRY)
        .map(action => action.payload.url)
        .mergeMap(url => {
            return ajax.getJSON(url)
                .map(response => fetchSuccess(response))
                .takeUntil(action$.ofType(types.FETCH_CANCEL))
                .catch(e => Observable.of({type: types.FETCH_FAILED}));
        });
}

function timerEpic(action$) {
    return action$.ofType(types.FETCH_START, types.FETCH_RETRY)
    .mergeMap(()=>Rx.Observable.interval(1000).do(console.warn)
        .mapTo(timer())
        .takeUntil(action$.ofType(
            types.FETCH_CANCEL,
            types.FETCH_FAILED,
            types.FETCH_SUCCESS
        )))
}

export const rootEpic = combineEpics(fetchEpic, timerEpic);
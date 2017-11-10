import {handleActions} from 'redux-actions';
import {initState} from '../state/initState';
import * as types from '../const/actionTypes';

export default handleActions(
    {
        [types.FETCH_START]: (state, action) => {
            const {url} = action.payload;
            //console.log(controller);
            return {...state, url, response: '', popup: true, fetching: true, time: 0}
        },
        [types.FETCH_SUCCESS]: (state, action) => {
            const {response} = action.payload;
            //console.log('cool-red');
            return {...state, response, fetching: false}
        },
        [types.FETCH_FAILED]: (state) => {
            //console.log('fail-red');
            return {...state, response:'bad request', fetching: false, retry: true }
        },
        [types.POPUP_HIDE]: (state) => {
            console.log('hide');
            return {...state, popup: false}
        },
        [types.POPUP_SHOW]: (state) => {
            console.log('show');
            return {...state, popup: true}
        },
        [types.FETCH_CANCEL]: (state) => {
            //console.log('cancel');
            return {...state, response: '', popup: false, fetching: false}
        },
        [types.FETCH_RETRY]: (state) => {
            return {...state, response: '', popup: true, fetching: true, time: 0}
        },
        [types.TIMER]: (state) => {
            //console.log('timer');
            return {...state, time: state.time+1}
        },

    }, initState
);


import { createAction } from 'redux-actions';
import * as types from '../const/actionTypes';

export const fetchStart = createAction(types.FETCH_START, ( url ) => {
    return {url};
});
export const fetchSuccess = createAction(types.FETCH_SUCCESS, (response) => {
    return {response};
});
export const fetchFailed = createAction(types.FETCH_FAILED, () => {
    return {};
});
export const fetchCancel = createAction(types.FETCH_CANCEL, () => {
    return {};
});
export const popupHide = createAction(types.POPUP_HIDE, () => {
    return {};
});
export const popupShow = createAction(types.POPUP_SHOW, () => {
    return {};
});
export const timer = createAction(types.TIMER, () => {
    return {};
});
export const fetchRetry = createAction(types.FETCH_RETRY, (url) => {
    return {url};
});
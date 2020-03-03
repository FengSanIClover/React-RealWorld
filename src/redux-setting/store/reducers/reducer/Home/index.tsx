import { IActionState } from 'models/Home';
import * as actionTypes from 'redux-setting/store/actions/Home/actionTypes';
import { homeActionType } from 'redux-setting/store/actions/Home';

const initState: IActionState = {
    articles: [],
    tabs: [],
    tags: [],
    loading: false
}

const homeReducer = (state: IActionState = initState, action: homeActionType) => {
    switch (action.type) {
        case actionTypes.FETCHDATASTART:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ARTICLELIST:
            return {
                ...state,
                articles: action.payload,
                loading: false
            };
        case actionTypes.GET_ARTICLELIST_BY_TAG:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case actionTypes.GET_TAGLIST:
            return {
                ...state,
                tags: action.payload
            };
        default:
            return state;
    }
}

export default homeReducer;
import * as actionTypes from 'redux-setting/store/actions/Home/actionTypes';
import axios from 'axios-setting';
import { Dispatch } from 'redux';
import { IArticle } from 'models/Home';

export interface IGetArticleList {
    type: actionTypes.GET_ARTICLELIST,
    payload?: any
}

export const getArticleList = (articles: IArticle[]): IGetArticleList => {
    return {
        type: actionTypes.GET_ARTICLELIST,
        payload: articles
    }
}

export const GetArticleList = () => {
    return (dispatch: Dispatch) => {
        axios.get('/articles').then(res => {
            if (res.data.returnCode === "0000") {
                dispatch(getArticleList(res.data.articles))
            }
        })
    }
}

export type homeActionType = IGetArticleList;
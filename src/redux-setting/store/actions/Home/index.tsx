import * as actionTypes from 'redux-setting/store/actions/Home/actionTypes';
import axios from 'axios-setting';
import { Dispatch } from 'redux';
import { IArticle } from 'models/Home';
import { AxiosResponse } from 'axios';


//#region GetArticleList

export interface IGetArticleList {
    type: actionTypes.GET_ARTICLELIST,
    payload: IArticle[]
}

export const getArticleList = (articles: IArticle[]): IGetArticleList => {
    return {
        type: actionTypes.GET_ARTICLELIST,
        payload: articles
    }
}

export const GetArticleList = () => {
    return (dispatch: Dispatch) => {
        axios.get('/articles').then((res: AxiosResponse) => {
            if (res.data.returnCode === "0000") {
                dispatch(getArticleList(res.data.articles))
            }
        })
    }
}

//#endregion

//#region GetTagList
export interface IGetTagList {
    type: actionTypes.GET_TAGLIST,
    payload: string[]
}

export const GetTagList = () => {
    return (dispatch: Dispatch) => {
        axios.get("/tags").then((res: AxiosResponse) => {
            if (res.data.returnCode === "0000") {
                dispatch(getTagList(res.data.tags));
            }
        })
    }
}

export const getTagList = (tags: string[]): IGetTagList => {
    return {
        type: actionTypes.GET_TAGLIST,
        payload: tags
    }
}

//#endregion

export type homeActionType = IGetArticleList | IGetTagList;
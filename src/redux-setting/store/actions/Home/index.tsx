import * as actionTypes from 'redux-setting/store/actions/Home/actionTypes';
import axios from 'axios-setting';
import { Dispatch } from 'redux';
import { IArticle } from 'models/Home';
import { AxiosResponse } from 'axios';


export interface IFetchDataStart {
    type: actionTypes.FETCHDATASTART
}

export const fetchDataStart = (): IFetchDataStart => {
    return {
        type: actionTypes.FETCHDATASTART
    }
}

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
        dispatch(fetchDataStart());
        axios.get('/articles').then((res: AxiosResponse) => {
            if (res.data.returnCode === "0000") {
                dispatch(getArticleList(res.data.articles))
            }
        });
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

//#region GetArticleListByTag

export interface IGetArticleListByTag {
    type: actionTypes.GET_ARTICLELIST_BY_TAG,
    payload: IArticle[]
}

export const GetArticleListByTag = (tagName: string) => {
    return (dispatch: Dispatch) => {
        dispatch(fetchDataStart());
        axios.get(`/articles/?tag=${tagName}`).then((res: AxiosResponse) => {
            if (res.data.returnCode === "0000") {
                dispatch(getArticleListByTag(res.data.articles))
            }
        })
    }
}

export const getArticleListByTag = (articles: IArticle[]): IGetArticleListByTag => {
    return {
        type: actionTypes.GET_ARTICLELIST_BY_TAG,
        payload: articles
    }
}

//#endregion

export type homeActionType = IGetArticleList | IGetTagList | IGetArticleListByTag | IFetchDataStart;
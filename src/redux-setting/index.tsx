import React from 'react';
import reducer, { reducerType } from 'redux-setting/store/reducers';
import { AppActionType } from 'redux-setting/store/actions';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

interface IState {
    initialState?: {}
}

const root: React.SFC<IState> = (props) => {

    const store = createStore(reducer, props.initialState, applyMiddleware(thunk as ThunkMiddleware<reducerType, AppActionType>))

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default root;
import { combineReducers } from 'redux';
import homeReducer from 'redux-setting/store/reducers/reducer/Home';

const reducer = combineReducers({
    home: homeReducer
})

export default reducer;
export type reducerType = ReturnType<typeof reducer>;
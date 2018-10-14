import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { homeNumber } from './reducer/home.reducer';

export const reducer = combineReducers({
    homeNumber
})

export let store = createStore(reducer)

export default store
import { combineReducers } from 'redux';
import { createStore, applyMiddleware} from 'redux';
import { homeNumber } from './reducer/home.reducer';
import thunkMiddleware from 'redux-thunk'

export const reducer = combineReducers({
    home: homeNumber
})

console.log(reducer)

export function getStore() {
    return createStore(reducer, applyMiddleware(thunkMiddleware))
}

export function getClientStore() {
    // let defaultState = window.context.state;
    return createStore(reducer, applyMiddleware(thunkMiddleware))
}

export default getStore
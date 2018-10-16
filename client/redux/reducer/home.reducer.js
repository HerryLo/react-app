import {
    ADD_HOME,
    HOME_LIST
} from '../action/home.action'

const defaultState = {
    number: 0,
    newsList: []
}

export function homeNumber(state = defaultState, action) {
    switch (action.type) {
        case ADD_HOME:
            return {
                ...state,
                number: ++action.number
            };
        case HOME_LIST:
            return {
                ...state,
                newsList: action.list
            };
        default:
            return state;
    }
}
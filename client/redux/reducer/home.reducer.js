import {
    ADD_HOME
} from '../action/home.action'

export function homeNumber(state = 0, action) {
    switch (action.type) {
        case ADD_HOME:
            return state + 1;
        default:
            return state;
    }
}
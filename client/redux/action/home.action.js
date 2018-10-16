// import axios from 'axois'

export const ADD_HOME = 'ADD_HOME';
export const HOME_LIST = 'HOME_LIST'

export function addHome(number) {
    return {
        type: ADD_HOME,
        number
    }
}

export function changeList(list) {
    return {
        type: HOME_LIST,
        list
    }
}

export function homeList(list) {
    return ( dispatch ) => {
        // axios.get()
        //     .then((res)=> {
        //         console.log(res)
        //     })
        const list = [12,45,67,87]
        dispatch(changeList(list));
    }
}
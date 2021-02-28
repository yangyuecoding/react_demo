import {ADD} from './type';

let add = (payload) => {
    return {type:ADD,payload};
}

let addThunk = (payload) => {
    return (dispatch,getState) => {
        dispatch(add(payload));
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addThunk
}
import {ADD} from './type';

let add = (payload) => {
    return {type:ADD,payload};
}

let addThunk = (payload) => {
    return (dispatch,getState) => {
        dispatch(add(payload));
    }
}

export default {
    addThunk
}
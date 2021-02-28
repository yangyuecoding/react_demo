import {PUSH} from './type';

let push = (payload) => {
    return {type:PUSH,payload};
    
}

let push_thunk = (payload) => {
    return (dispatch,getState) => {
        dispatch(push(payload));
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    push_thunk
}
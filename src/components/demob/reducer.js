
import {data} from './state';
import {PUSH} from './type';

let reducer = (state=data,actions) => {
    switch (actions.type) {
        case PUSH:
            return {...state,...actions.payload};
        default:
            return state;
    }
}

export default reducer;
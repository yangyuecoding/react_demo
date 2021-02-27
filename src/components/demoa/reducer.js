import {data} from './state';
import {ADD} from './type';


let reducer = (state=data,actions) => {
    switch (actions.type) {
        case ADD:
            return {...state,...actions.payload};
        default:
            return state;
    }
}

export default reducer;
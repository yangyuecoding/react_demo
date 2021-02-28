import {combineReducers} from 'redux';
import demoa from '../components/demoa/reducer';
import demob from '../components/demob/reducer';
let reducer = combineReducers({
    demoa,
    demob
})
export default reducer;
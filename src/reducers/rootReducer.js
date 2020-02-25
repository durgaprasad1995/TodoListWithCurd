import { combineReducers } from 'redux';
import addReducers from './addReducers';
import editReducers from './editReducers';

export default combineReducers({
    addReducers,editReducers
});
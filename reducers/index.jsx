import {combineReducers} from 'redux';
import UserReducer from './reducer-users';


export const allReducers = combineReducers({

    users : UserReducer
});

export default allReducers;
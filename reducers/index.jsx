import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import activeUser from './reducer-activeUser';


export const allReducers = combineReducers({

    users : UserReducer,
    activeUser : activeUser
});

export default allReducers;
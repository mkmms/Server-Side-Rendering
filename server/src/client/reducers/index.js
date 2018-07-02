import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer
});
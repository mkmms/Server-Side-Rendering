import { combineReducers } from 'redux';
import usersReducer from './userReducer';
import adminsReducer from './adminReducer';
import authReducer from './authReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});
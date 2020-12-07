import { combineReducers } from 'redux';


import auth from './auth/reducer';
import meet from './meet/reducer';

export default combineReducers({
	auth, meet
});
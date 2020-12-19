import { takeLatest, call, put, all } from 'redux-saga/effects';
import {signIn, getCsrfToken, logout } from '../../../api/session';
import { signSuccess, signFailure } from './actions';
import history from '../../../services/history';
import Cookies from 'js-cookie';

export function*  auth ( { payload } ){
    
		const { email, password } = payload;
		const  response = yield call(signIn,email,password);
		if(response.error){
			yield put(signFailure());
			return;
		}
		const csrf = yield call(getCsrfToken);
		if(csrf.error){
			yield put(signFailure());
			return;
		}
		yield put(signSuccess(csrf, response.user));
		history.replace('/dashboard');
}

export function* getCsrf(){
	const { pathname } = history.location;
	const csrf = yield call(getCsrfToken);
	if(csrf.error){
		yield put(signFailure());
		history.replace('/');
		return;
	}
	yield put(signSuccess(csrf, null));

	
	if( pathname === '/' || pathname === '/signup'){
		history.replace('/dashboard');
	}
	
}

export function* signOut(){
	yield call(logout);
	history.replace('/');
}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', auth),
	takeLatest('@auth/CSRF_UPDATE', getCsrf),
	takeLatest('@auth/SIGN_OUT', signOut),
]);
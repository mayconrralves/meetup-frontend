import { takeLatest, call, put, all } from 'redux-saga/effects';
import {signIn, getCsrfToken } from '../../../api/session';
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
		history.push('/dashboard');
}

export function* getCsrf(){
	let csrf = null;
	csrf = Cookies.get('_csrf');
	if(!csrf){
		csrf = yield call(getCsrfToken);
		if(csrf.error){
			yield put(signFailure());
			history.push('/');
			return;
		}
	}
	yield put(signSuccess(csrf, null));

	const { pathname } = history.location;
	if( pathname === '/' || pathname === '/signup'){
		history.push('/dashboard');
	}
	
}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', auth),
	takeLatest('@auth/CSRF_UPDATE', getCsrf),
]);
import { takeLatest, call, put } from 'redux-saga/effects';
import {successRequest,failureRequest } from './actions';
import { indexMeet } from '../../../api/meet';
export function* getMeetups(){
	const response = yield call(indexMeet);
	if(response.error){
		yield put(failureRequest());
		return;

	}
	yield put(successRequest(response));
}

export default takeLatest('@meet/INITIAL_REQUEST', getMeetups);
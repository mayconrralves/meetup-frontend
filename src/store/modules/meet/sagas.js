import { all, takeLatest, call, put } from 'redux-saga/effects';
import {successRequest,failureRequest,requestMeetups } from './actions';
import { indexMeet, updateMeet, addBanner, createMeet } from '../../../api/meet';

export function* getMeetups(){
	const response = yield call(indexMeet);
	if(response.error){
		yield put(failureRequest());
		return;

	}
	yield put(successRequest(response));
}

export function* updateMeetup({ payload }){
	const { id, meet, image } = payload;
    if(image){
    	const responseImage = yield call(addBanner, image);
		if(responseImage.error){
			yield put(failureRequest());
			return;
		}
	meet.banner_id = responseImage.id;
    }
	
	
	const response = yield call(updateMeet, id, meet);
	if(response.error){
		yield put(failureRequest());
		return;
	}
	yield put(successRequest());
	yield put(requestMeetups()); 
}

export function* createMeetup( { payload } ) {
	const { meet, image} = payload;
	const responseImage= yield call(addBanner, image);
	if(responseImage.error){
		yield put(failureRequest());
		return;
	}
	meet.banner_id = responseImage.id;
	const response = yield call(createMeet, meet);
	if(response.error) {
		yield put(failureRequest());
		return;
	}
	yield put(successRequest());
	yield put(requestMeetups());


}
export default all([
	takeLatest('@auth/CSRF_UPDATE', getMeetups),
	takeLatest('@meet/INITIAL_REQUEST', getMeetups),
	takeLatest('@meet/REQUEST_UPDATE', updateMeetup),
	takeLatest('@meet/REQUEST_CREATE', createMeetup),
]);
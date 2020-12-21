import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {successRequest,failureRequest,requestMeetups } from './actions';
import { indexMeet, updateMeet, addBanner, createMeet } from '../../../api/meet';
import history from '../../../services/history';
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
			toast.error("Erro: "+ response.error, {
			style: {
				borderRadius: '16px',
			}
		});
			return;
		}
	meet.banner_id = responseImage.id;
    }
	
	
	const response = yield call(updateMeet, id, meet);
	if(response.error){
		yield put(failureRequest());
		toast.error("Erro: "+ response.error, {
			style: {
				borderRadius: '16px',
			}
		});
		return;
	}
	yield put(successRequest());
	toast.success("Meetup Atualizado", {
		autoClose: 2000,
		style: {
			borderRadius:'16px',
		}
	});
	yield put(requestMeetups()); 
	history.replace('/dashboard');
}

export function* createMeetup( { payload } ) {
	const { meet, image} = payload;
	const responseImage= yield call(addBanner, image);
	if(responseImage.error){
		yield put(failureRequest());
		toast.error("Erro: "+ response.error, {
			style: {
				borderRadius: '16px',
			}
		});
		return;
	}
	meet.banner_id = responseImage.id;
	const response = yield call(createMeet, meet);
	if(response.error) {
		yield put(failureRequest());
		toast.error("Erro: "+ response.error, {
			style: {
				borderRadius: '16px',
			}
		});
		return;
	}
	yield put(successRequest());
	toast.success("Meetup Cadastrado", {
		autoClose: 2000,
		style: {
			borderRadius:'16px',
		}
	});
	yield put(requestMeetups());
	history.replace('/dashboard');

}
export default all([
	takeLatest('@auth/CSRF_UPDATE', getMeetups),
	takeLatest('@meet/INITIAL_REQUEST', getMeetups),
	takeLatest('@meet/REQUEST_UPDATE', updateMeetup),
	takeLatest('@meet/REQUEST_CREATE', createMeetup),
]);
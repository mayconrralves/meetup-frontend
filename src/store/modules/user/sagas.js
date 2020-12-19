import { all, put, call, takeLatest} from 'redux-saga/effects';
import { successRequest, failureRequest } from './actions';
import { addAvatar, updateUser, createUser } from '../../../api/user';

export function* createUserRequest( { payload } ){
	const {name, email, password, confirmPassword } = payload;
	const response = yield call(createUser, name, email, password, confirmPassword);

	if(response.error){
		yield put(failureRequest());
	}
	yield put(successRequest());
}

export function* updateUserRequest({ payload }){
	const {user, image } = payload;

	if(image){
		const responseImage = yield call(addAvatar, image);
		if(responseImage.error){
			yield put(failureRequest());
		}
		user.avatar_id = responseImage.id;
	}
	const response = yield call(updateUser, user);

	if(response.error){
		yield put(failureRequest());
	}
	yield put(successRequest());
	
}

export default all([
		takeLatest('@user/CREATE_USER', createUserRequest),
		takeLatest('@user/UPDATE_USER', updateUserRequest),
	]);
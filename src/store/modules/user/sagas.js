import { all, put, call, takeLatest} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { successRequest, failureRequest } from './actions';
import { addAvatar, updateUser, createUser } from '../../../api/user';
import { getUser } from '../../../api/session';
import history from '../../../services/history';

export function* createUserRequest( { payload } ){
	const {name, email, password, confirmPassword } = payload;
	const response = yield call(createUser, name, email, password, confirmPassword);
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
	toast.success("Usuário Cadastrado", {
		autoClose: 2000,
		style: {
			borderRadius:'16px',
		}
	});
	history.replace('/');
}

export function* updateUserRequest({ payload }){
	const {user, image } = payload;
	console.log(user)

	if(image){
		const responseImage = yield call(addAvatar, image);
		if(responseImage.error){
			yield put(failureRequest());
			toast.error("Erro: "+ responseImage.error, {
			style: {
				borderRadius: '16px',
			}
		});
			return;
		}
		user.avatar_id = responseImage.id;
	}
	const response = yield call(updateUser, user);
	if(response.error){
		yield put(failureRequest());
		toast.error("Erro: "+ response.error, {
			style: {
				borderRadius: '16px',
			}
		});
		return;
	}
	yield put(successRequest(user));

	toast.success("Usuário Atualizado", {
		autoClose: 2000,
		style: {
			borderRadius:'16px',
		}
	});
	history.replace('/dashboard');
}

export function* getUserRequest(){
	const user = yield call(getUser);
	yield put(successRequest(user));
}
export default all([
		takeLatest('@user/CREATE_USER', createUserRequest),
		takeLatest('@user/UPDATE_USER', updateUserRequest),
		takeLatest('@auth/SIGN_IN_SUCCESS', getUserRequest)
	]);
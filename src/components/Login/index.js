import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Container from '../layouts/style';
import FontContainer from './style';
import { useDispatch, useSelector } from 'react-redux';
import {signIn,getCsrfToken, logout} from '../../api/session';
import { signInRequest } from '../../store/modules/auth/actions';

import UserForm from '../UserForm';

export default () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [banner, setBanner] = useState(null);
	const dispatch = useDispatch();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		event.target.email.value = '';
		event.target.password.value = '';
		//getCsrfToken();
		dispatch(signInRequest(email, password));
	}

	
	const logoutHandle = async () => {
		try {
			await logout();
		}
		catch(error){
			console.log(error)
		}	
		
	}	
	

	return (
		<Container>
				<Title />
				<UserForm method={'post'} handleSubmit={handleSubmit} signin/>
				<button onClick={logoutHandle}>logout</button>
				<FontContainer>
					<Link to='/signup'>Criar Conta Grátis</Link>
				</FontContainer>	
		</Container>


		)
}
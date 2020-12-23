import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from '../Title';
import { signInRequest } from '../../store/modules/auth/actions';
import UserForm from '../UserForm';

import Container from '../layouts/style';
import FontContainer from './style';

export default function Login() {

	const dispatch = useDispatch();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		event.target.email.value = '';
		event.target.password.value = '';
		if(email && password){
			dispatch(signInRequest(email, password));
		}
		
	}
	
	return (
		<Container>
				<Title />
				<UserForm method={'post'} handleSubmit={handleSubmit} signin/>
				<FontContainer>
					<Link to='/signup'>Criar Conta Grátis</Link>
				</FontContainer>	
		</Container>


		)
}
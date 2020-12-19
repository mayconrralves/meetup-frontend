import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Title from '../Title';
import Container from '../layouts/style';
import FontContainer from './style';
import { createUser } from '../../store/modules/user/actions';

import UserForm from '../UserForm';


export default function SignUp ()  {
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirmPassword = event.target.confirmPassword.value;
		dispatch(createUser(name, email, password, confirmPassword));
	}
	return (
		<Container>
				<Title />
				<UserForm method={'post'} handleSubmit={handleSubmit} />
				<FontContainer>
					<Link to='/'>Já tenho login </Link>
				</FontContainer>
				
		</Container>


		)
}
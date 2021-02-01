import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';

import Title from '../Title';
import Container from '../layouts/style';
import FontContainer from './style';
import { createUser } from '../../store/modules/user/actions';

import UserForm from '../UserForm';

export default function SignUp ()  {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
			},

	});
	
	const schema = yup.object().shape({
			name: yup.string().required(),
			email: yup.string().email("Insira um email válido").required(),
			password: yup.string().required(),
			confirmPassword: yup.string().oneOf([yup.ref('password')], "Senhas não conferem"),
		});
	const handleSubmit = async (event) => {
		setError(null);
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const confirmPassword = event.target.confirmPassword.value;
		try {
			await schema.validate({
				name, email, password,confirmPassword
			});
			dispatch(createUser(name, email, password, confirmPassword));
		}catch(err){
			setError(err.errors ? err.errors[0] : null);
		}
	}
	return (
		<Container>
				<Title />
				<UserForm method={'post'} handleSubmit={handleSubmit} msgError={error} />
				<FontContainer>
					<Link to='/'>Já tenho login </Link>
				</FontContainer>
				
		</Container>


		)
}
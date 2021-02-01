import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

import Title from '../Title';
import { signInRequest } from '../../store/modules/auth/actions';
import UserForm from '../UserForm';

import Container from '../layouts/style';
import FontContainer from './style';

export default function Login() {
	const [error, setError] = useState(null);
	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
				oneOf: () => `Senhas não conferem`
			},
			string: {
					email: "Insira um email válido",
			},

	});
	const dispatch = useDispatch();

	const schema = yup.object().shape({
			email: yup.string().email().required(),
			password: yup.string().required(),
		});

	const handleSubmit = async (event) => {
		setError(null);
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		try {
			await schema.validate({
				email, password
			});
			event.target.email.value = '';
			event.target.password.value = '';
			dispatch(signInRequest(email, password));
			
		}catch(err){
			setError(err.errors ? err.errors[0] : null);
		}
		
	}
	
	return (
		<Container>
				<Title />
				<UserForm method={'post'} handleSubmit={handleSubmit} msgError={error} signin/>
				<FontContainer>
					<Link to='/signup'>Criar Conta Grátis</Link>
				</FontContainer>	
		</Container>


		)
}
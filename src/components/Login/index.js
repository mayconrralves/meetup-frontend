import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Container from '../layouts/style';
import FontContainer from './style';

import {signIn,getCsrfToken, logout} from '../../api/session';


import UserForm from '../UserForm';

export default () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [banner, setBanner] = useState(null);

	useEffect(()=>{
		getCsrfToken();
		
	},[]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		const result = await signIn(event.target.email.value, event.target.password.value);
		event.target.email.value = '';
		event.target.password.value = '';
		getCsrfToken();
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
				<FontContainer>
					<Link to='/signup'>Criar Conta Grátis</Link>
				</FontContainer>	
		</Container>


		)
}
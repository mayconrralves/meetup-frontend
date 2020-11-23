import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Container from '../layouts/style';
import FontContainer from './style';


import UserForm from '../UserForm';

export default () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
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
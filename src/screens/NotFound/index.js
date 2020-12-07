import React from 'react';
import { useSelector } from 'react-redux';
import Container from './style';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
export default ()=> {
	const csrf = useSelector(state=>state.auth.csrf);
	let direction = '/';
	if(csrf){
			direction = '/dashboard';
	}
	return (
		<Container>
			<Title />
			<p>Error 404. Page not Found</p>
			<Link to={direction}>Initial Page</Link>
		</Container>
		)
}
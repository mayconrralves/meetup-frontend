import React from 'react';
import Container from './style';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';
export default ()=> {
	return (
		<Container>
			<Title />
			<p>Error 404. Page not Found</p>
			<Link to='/'>Initial Page</Link>
		</Container>
		)
}
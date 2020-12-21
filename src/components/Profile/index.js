import React from 'react';
import { Container } from './styles';


export default function Profile( ){
	return (
		<Container>
			<img src="" alt="avatar"/>
			<input type="file" name="image" />
			<input type="name" name="name" placeholder=""/>
			<input type="email" name="email" placeholder=""/>
			<input type="password" name="password" placeholder=""/>
			<input type="password" name="confirmPassword" placeholder=""/>
			<button>Atualizar Cadastro</button>
		</Container>
		)
}
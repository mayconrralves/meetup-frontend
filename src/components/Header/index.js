import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import Container from './style';
import Title from '../Title';

export default function Header() {
	const dispatch = useDispatch();
	return (
		<Container>
			<div className='header'>
				<Title />
				<nav>
					<div>
						<span>Zé Coméia</span>
						<span>Meu Perfil</span>
					</div>
					<button onClick={()=>dispatch(signOut())}>Sair</button>
				</nav>
			</div>
			
		</Container>
		)
}
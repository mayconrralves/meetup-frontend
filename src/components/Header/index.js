import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import Container from './style';
import Title from '../Title';

export default function Header() {
	const dispatch = useDispatch();
	const { user } = useSelector(state=> state.user);

	const capitalize = name => {
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
	return (
		<Container>
			<div className='header'>
				<Title />
				<nav>
					<div>
						<span>{ user ? capitalize(user.name) : 'User' }</span>
						<Link to='/profile'>Meu Perfil</Link>
					</div>
					<button onClick={()=>dispatch(signOut())}>Sair</button>
				</nav>
			</div>
			
		</Container>
		)
}
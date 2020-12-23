import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { updateUser } from '../../store/modules/user/actions';
import { Container } from './styles';

export default function Profile( ){
	const dispatch = useDispatch();
	const { user } = useSelector(state=> state.user);
	const handleSubmit = (event) => {
		event.preventDefault();
		const user = {};
		user.name = event.target.name.value;
		user.email = event.target.email.value;
		if(event.target.oldPassword.value) {
			user.oldPassword = event.target.oldPassword.value;
			user.password = event.target.newPassword.value;
			user.confirmPassword = event.target.confirmPassword.value;
		}
		
		dispatch(updateUser(user));
		
	}
	return user ? (
		<Container method="post" onSubmit={handleSubmit}>
			<fieldset>
				<legend>Atualize seu Cadastro <hr/></legend>
				<label>Nome:</label>
				<input type="name" name="name" defaultValue={ user.name } />
				<label>Email:</label>
				<input type="email" name="email" defaultValue={ user.email } />
				<label>Nova Senha:<hr /></label>
				<input type="password" name="oldPassword" placeholder="Digite a senha antiga..." />
				<input type="password" name="newPassword" placeholder="Digite a Nova Senha..."/>
				<input type="password" name="confirmPassword" placeholder="Confirme a Senha..."/>
			</fieldset>
			
			<button type="submit">Atualizar Cadastro</button>
		</Container>
		) : (
			<h1>Loading...</h1>
		)
}
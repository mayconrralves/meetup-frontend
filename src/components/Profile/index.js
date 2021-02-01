import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import { updateUser } from '../../store/modules/user/actions';
import { Container } from './styles';

export default function Profile( ){
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const { user } = useSelector(state=> state.user);
	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
			},

	});
	const handleSubmit = async (event) => {
		setError(null);
		event.preventDefault();
		const user = {};
		user.name = event.target.name.value;
		user.email = event.target.email.value;
		user.oldPassword = event.target.oldPassword.value;
		user.password = event.target.newPassword.value;
		user.confirmPassword = event.target.confirmPassword.value;

		const schema = yup.object().shape({
			name: yup.string(),
			email: yup.string().email("Insira um email válido"),
			password: yup.string(),
			confirmPassword: yup.string().oneOf([yup.ref('password')], "Senhas não conferem"),
			oldPassword: yup.string().when(['password', 'confirmPassword'], {
				is: (password, confirmPassword) =>password && confirmPassword ? 
													password === confirmPassword :
													false,
				then: yup.string().required("É necessária senha atual"),
			}),
		});
		try {
			await schema.validate({
				...user
			});
			dispatch(updateUser(user));
		}catch(err){
			setError(err.errors ? err.errors[0] : null);
			window.scrollTo(0, 0);
		}
		
	}
	return user ? (
		<Container method="post" onSubmit={handleSubmit}>

			<fieldset>
				<legend>Atualize seu Cadastro <hr/></legend>
				{error && <span className='error'>{error}</span>}
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
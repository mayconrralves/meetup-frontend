import React from 'react';
import PropTypes from 'prop-types';
import FormStyle from './style';

const Form = ( { method,  handleSubmit, signin, msgError} ) => {
	
	const userForm = () => {
		return signin ? (
					<>
						<input name='email' type='email' placeholder='Seu Email' />
						<input name='password' type='password' placeholder='Digite sua senha...' />
						{ msgError && <span>{msgError}</span>}
						<input type='submit' value='Entrar' />
					</>
				) : (
					<>
						<input name='name' type='name' placeholder='Seu Nome' />
						<input name='email' type='email' placeholder='Cadastre seu e-mail' />
						<input name='password' type='password' placeholder='Digite sua senha...' />
						<input name='confirmPassword' type='password' placeholder='Digite sua senha novamente...'/>
						{ msgError && <span>{msgError}</span>}
						<input type='submit'  value='Criar Conta'/>
					</>
				);
	}
	return (
		<FormStyle method={method} onSubmit={handleSubmit}>
			{
				userForm()
			}
				
		</FormStyle>


		)
}

Form.propTypes = {
	method: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	signin: PropTypes.bool,
}

export default Form;


import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormStyle from './style';

const Form = ( { method,  handleSubmit, signin } ) => {
	
	const userForm = () => {
		return signin ? (
					<>
						<input name='email' type='email' placeholder='Seu Email' />
						<input name='password' type='password' placeholder='Digite sua senha...' />
						<input type='submit' value='Entrar' />
					</>
				) : (
					<>
						<input name='email' type='email' placeholder='Cadastre seu e-mail' />
						<input name='password' type='password' placeholder='Digite sua senha...' />
						<input name='password' type='password' placeholder='Digite sua senha novamente...'/>
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
	handleSubmit: PropTypes.func.isRequired,
	signin: PropTypes.bool,
}

export default Form;


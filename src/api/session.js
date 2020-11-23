import axios from './configAxios';

export const signIn = async (email, password)=>{
	try{
		const result = await axios.post('/signin', {
			email,
			password,
		});	
		return result.data;
	}catch(error){
			return {error};
	}
}

export const getCsrfToken = async () => {
	try{
		const { data } = await axios.get('/getcsrf');
		axios.defaults.headers.post['X-CSRF-Token'] = data.csrf;
		axios.defaults.headers.put['X-CSRF-Token'] = data.csrf;
		axios.defaults.headers.delete['X-CSRF-Token'] = data.csrf;

	}catch(error){
		return {error};
	}
}

export const logout = async () => {
	try {
		await axios.get('/logout');
	}
	catch(error){
		return  {error};
	}
}
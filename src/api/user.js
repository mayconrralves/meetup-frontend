import axios from './configAxios';

export const createUser = async(name, email, password,confirmPassword)=>{
	try{
		const { data } = await axios.post('/signup',{
			name,
			email,
			password,
			confirmPassword
		});
		return data;
	}
	catch(error){
		return {error};
	}
}

export const updateUser = async(user) => {

	/*
		{name, email, oldPassword, password, confirmPassword}
	*/
	try {
		const { data } = await axios.put('/user/update', {
			...user
		});
		return data;

	}catch(error){
		return { error};
	}
}

export const addAvatar = async(file) => {
	try {
		const formData = new FormData();
		formData.append('file', file);
		const  { data }  = await axios.post('/user/avatar', formData);
		return data;
	}catch(error){
		return { error};
	}
}




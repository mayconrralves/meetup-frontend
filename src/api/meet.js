import axios from './configAxios';

export const indexMeet = async() => {
	try{
		const { data } = await axios.get('/meet/index');
		return data;
	}catch(error){
		return {error};
	}
}

export const addBanner = async (file) => {
	try {
		const formData = new FormData();
		formData.append('file', file);
		const  { data }  = await axios.post('/meet/banner', formData);
		return data;
	}catch(error){
		return { error};
	}
}

export const createMeet = async ( { localization, description, date, banner_id } ) => {
	try {
		const { data } = await axios.post('/meet/store',{
			localization,
			description,
			date,
			banner_id
		});

		return data;
	}catch(error){
		return { error};
	}
}

export const updateMeet = async (id, meet) => {
	try {
		const { data } = await axios.put(`/meet/update`, {
			...meet,
		}, {
			params: {
				id: id,
			}
		});

		return data;

	}catch(error){
		return { error};
	}
}

export const deleteMeet = async (id) => {
	try {
			const { data } = await axios.delete('/meet/delete', {
			params: {id}
		});
		return data;

	}catch(error){
		return { error};
	}
}

export const indexAllMeets = async ()=> {
	try {
		const { data } = await axios.get('/meets/all');
		return data;
	}catch(error) {
		return { error };
	}
}



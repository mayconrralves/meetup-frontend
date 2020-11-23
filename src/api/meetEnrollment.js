import axios from './configAxios';

export const createEnrollment = async (id) => {
	try {
		const { data } = await axios.post('/meet/enrollment', null, {
			params: { id },
		});

		return data;
	}catch(error){
		return { error};
	}
}

export const canceledEnrollment = async (idMeet) => {
	try {
		const  { data } = await axios.put('/meet/enrollment/update', null, {
			params: { id : idMeet},
		});
		return data;

	}catch(error){
		return { error};
	}
}

export const indexEnrollment = async (date='2020-12-01T00:00:00', page=1) => {
	try {
		const { data } = await axios.get('/meet/enrollment/index', {
			params: {
				date,
				page,
			}
		});

		return data;

	}catch(error){
		return { error};
	}
}
import axios from './configAxios';

export const notificationsIndex = async () => {
	
	try {
		const { data } = await axios.get('/meet/notifications');

		return data;

	}catch(error){
		return { error};
	}
}

export const notificationsUpdate = async (id) => {

	try {
		const { data } = await axios.put('/meet/notifications/update', null, {
			params: { id },
		});

		return data ;

	}catch(error){
		return { error};
	}
}
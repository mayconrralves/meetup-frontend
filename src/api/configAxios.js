import axios from 'axios';


const apiURL = 'http://157.230.62.196';

axios.interceptors.request.use(
			config =>{
				const { origin } = new URL(apiURL + config.url);
				const allowedOrigins = [apiURL];
				const token = localStorage.getItem('token');
				if(allowedOrigins.includes(origin)){
					config.headers.authorization = `Bearer ${token}`;
				}
				return config;
			},
			error => {
				return Promise.reject(error);
			}	

		);

export default axios;
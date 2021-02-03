import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';
import FormMeet from '../FormMeet';
import { updateMeetRequest } from '../../store/modules/meet/actions';
import history from '../../services/history';


export default function EditMeet(){

	const [error, setError] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { meets } = useSelector(state=>state.meet);
	const editMeet = meets.find(m=>m.id===parseInt(id));
	const FILE_SIZE = 160 * 1024;
	const SUPPORTED_FORMATS = [
     	"image/jpg",
    	"image/jpeg",
    	"image/gif",
    	"image/png"
    ];
	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
			},

	});
	const schema = yup.object().shape({
		title: yup.string().required(),
		description: yup.string().required(),
		localization: yup.string().required(),
		image : yup.mixed()
				   .required()
				   .test(
				   		"fileSize",
				   		"Arquivo muito grande",
				   		value => value && value.size <= FILE_SIZE
				   	)
				   	.test(
				   		"fileFormat",
				   		"Formato não suportado",
				   		value => value && SUPPORTED_FORMATS.includes(value.type),
				   	)
	});	
	const handleSubmit = async (event) => {
		setError(null);
		event.preventDefault();
		const title = event.target.title.value;
		const image = event.target.image.files[0];
		const date = event.target.date.value;
		const time = event.target.time.value;
		const description = event.target.description.value;
		const localization = event.target.localization.value;
		const dateTime = date+'T'+time+':00-03:00';
		try {
			await schema.validate({
				title,
				image,
				description,
				localization
			});
			// dispatch(updateMeetRequest(id, { 
			// 	title,
			// 	date: dateTime,
			// 	description,
			// 	localization,
			// }, image ));
			// history.push('/dashboard');

		}catch(err){
			setError(err.errors ? err.errors[0] : null);
			window.scrollTo(0, 0);
		}

	}
	return meets.length ? (
			<FormMeet editMeet={editMeet} handleSubmit={handleSubmit} msgError={error}/>
		) : (
		<h1>Loading...</h1>
		)
	
}
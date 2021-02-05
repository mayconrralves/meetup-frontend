import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { parseISO, isPast, isValid } from 'date-fns';
import * as yup from 'yup';
import FormMeet from '../FormMeet';
import { updateMeetRequest } from '../../store/modules/meet/actions';
import history from '../../services/history';
import { FILE_SIZE, SUPPORTED_FORMATS } from '../../config';

export default function EditMeet(){

	const [error, setError] = useState(null);
	const { id } = useParams();
	const dispatch = useDispatch();
	const { meets } = useSelector(state=>state.meet);
	console.log(meets)
	const editMeet = meets.find(m=>m.id===parseInt(id));
	
	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
			},

	});
		const schema = yup.object().shape({
		title: yup.string().required(),
		description: yup.string().required(),
		localization: yup.string().required(),
		dateTime: yup.string()
				 .test(
				 	'isValid',
				 	'Data e/ou hora inválida(s)',
				 	value => value && isValid(parseISO(value))
				 	)
				 .test(
				 	'isPast',
				 	'Você não pode criar Meetup com data passada',
				 	value => value && !isPast(parseISO(value))
				 ),
			
		image : yup.mixed()
				   .test(
				   		"fileSize",
				   		"Imagem muito grande",
				   		/*if image undefined then return true because the file will not be send, */
				   		value => value ? value.size <= FILE_SIZE : true
				   	)
				   	.test(
				   		"fileFormat",
				   		"Formato da imagem não suportado",
				   		/*if image undefined then return true because the file will not be send, */
				   		value => value ? SUPPORTED_FORMATS.includes(value.type) : true,
				   	)
	});	
	const handleSubmit = async (event) => {
		setError(null);
		event.preventDefault();
		const meet = {}
		const image = event.target.image.files.length ? event.target.image.files[0] : null;
		meet.title = event.target.title.value;
		meet.description = event.target.description.value;
		meet.localization = event.target.localization.value;
		meet.dateTime = event.target.date.value+'T'+event.target.time.value;
		
		try {
			await schema.validate({
				...meet,
				image
				
			});
			dispatch(updateMeetRequest(
				id,
				meet,
				image	
			));
		} catch(err) {
			setError(err.errors ? err.errors[0] : null);
			window.scrollTo(0, 0);
		}
	}
	return meets.length ? (
			<FormMeet editMeet={editMeet} accept={SUPPORTED_FORMATS} handleSubmit={handleSubmit} msgError={error}/>
		) : (
		<h1>Loading...</h1>
		)
	
}
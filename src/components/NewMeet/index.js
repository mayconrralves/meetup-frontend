import React from 'react';
import { useDispatch } from 'react-redux';
import FormMeet from '../FormMeet';
import { saveMeetRequest } from '../../store/modules/meet/actions';
export default function NewMeet(){
	const dispatch = useDispatch();
	const handleSubmit = ( event ) => {
		event.preventDefault();
		const title = event.target.title.value;
		const image = event.target.image.files[0];
		const date = event.target.date.value;
		const description = event.target.description.value;
		const localization = event.target.localization.value;
		dispatch(saveMeetRequest(
			{
				title,
				date,
				description,
				localization
			},
			image	
		));
	}
	return (
		<FormMeet handleSubmit={handleSubmit} />
		)

}
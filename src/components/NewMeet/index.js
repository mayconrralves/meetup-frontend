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
		const time = event.target.time.value;
		const description = event.target.description.value;
		const localization = event.target.localization.value;
		const dateTime = date+'T'+time+':00-03:00';
		dispatch(saveMeetRequest(
			{
				title,
				date: dateTime,
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
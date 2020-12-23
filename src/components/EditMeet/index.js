import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import FormMeet from '../FormMeet';
import { updateMeetRequest } from '../../store/modules/meet/actions';
import history from '../../services/history';


export default function EditMeet(){

	const { id } = useParams();
	const dispatch = useDispatch();
	const { meets } = useSelector(state=>state.meet);
	const editMeet = meets.find(m=>m.id===parseInt(id));
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const title = event.target.title.value;
		const image = event.target.image.files[0];
		const date = event.target.date.value;
		const time = event.target.time.value;
		const description = event.target.description.value;
		const localization = event.target.localization.value;
		const dateTime = date+'T'+time+':00-03:00';
		dispatch(updateMeetRequest(id, { 
			title,
			date: dateTime,
			description,
			localization,
		}, image ));
		history.push('/dashboard');

	}
	return meets.length ? (
			<FormMeet editMeet={editMeet} handleSubmit={handleSubmit}/>
		) : (
		<h1>Loading...</h1>
		)
	
}
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from './styles';
import { requestMeetups} from '../../store/modules/meet/actions';
 

export default  function  MeetupList() {
	const dispatch = useDispatch();
	const meets = useSelector(state => state.meet.meets);
	useEffect(()=>{
		dispatch(requestMeetups());
	}, []);
	const loadMeets = () => {
		if(meets){
			const meetsList = meets.map((meet, index)=>{
			return (
				<li  key={index}>
						<div className='description' >{meet.description}</div>
						<div>
							<span>{meet.date}</span>
							<Link to={'/details/'+ meet.id}> > </Link>
						</div>
				</li>
					)
			});
			return meetsList;
		}
		return <span>Loading</span>
	}
		

	return (
		<Container>
			{ loadMeets() }
		</Container>
	)
}
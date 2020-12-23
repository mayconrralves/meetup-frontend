import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestMeetups } from '../../store/modules/meet/actions';
import Container from './styles';

export default  function  MeetupList() {
	const dispatch = useDispatch();
	const { meets } = useSelector(state => state.meet);
	useEffect(()=> {
		dispatch(requestMeetups());
	}, []);
	
	const loadMeets = () => {
		if(meets){
			const meetsList = meets.map((meet, index)=>{
			return (
				<li  key={index}>
						<div className='title'>{meet.title}</div>
						<div>
							<span>{meet.date}</span>
							<Link to={'/details/'+ meet.id}> > </Link>
						</div>
				</li>
					)
			});
			return meetsList;
		}
		return <span>Loading...</span>
	}
		

	return (
		<Container>
			{ loadMeets() }
		</Container>
	)
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import  pt  from 'date-fns/locale/pt-BR';
import { zonedTimeToUtc  } from 'date-fns-tz';
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
				const date = zonedTimeToUtc(meet.date, "America/Sao_Paulo");
			return (
				<li  key={index}>
						<div className='title'>{meet.title}</div>
						<div>
							<span>
								{
									format(
										date, 
										"'Às' HH:mm' horas' 'de' dd 'de' MMMM 'de' yyyy",
										{locale: pt}
									)
										
								}
							</span>
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
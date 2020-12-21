import React, { useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import MeetupList from '../MeetupList';
import history from '../../services/history';

import Container from './style';

export default function Dashboard() {
	useEffect(() => {
		 window.scrollTo(0, 0);
		}, []);
	const onCkikedNew = () => {
		history.push('/meet/new');
	}
	return (
		<Container> 
			<section>
				<h2>Meus Meetups</h2>
				<button onClick={onCkikedNew}><AiOutlinePlusCircle/><span>Novo Meetup</span></button>
			</section>
			<MeetupList />
		</Container>
	)
}
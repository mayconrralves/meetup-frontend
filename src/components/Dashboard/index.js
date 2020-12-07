import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Container from './style';
import MeetupList from '../MeetupList';
export default () => {
	return (
		<Container> 
			<section>
				<h2>Meus Meetups</h2>
				<button><AiOutlinePlusCircle/><span>Novo Meetup</span></button>
			</section>
			<MeetupList />
		</Container>
	)
}
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from './styles';
import { indexMeet } from '../../api/meet';

export default function Details() {
	const [meet, setMeet] = useState([]);
	useEffect(()=>{
		const getMeet = async () => {

		}
	}
		
		);
	const { id } = useParams();

	return (
		<Container>
			<h1>
				{id}
			</h1>		
		</Container>
		)
}
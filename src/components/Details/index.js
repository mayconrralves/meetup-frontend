import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { requestMeetups} from '../../store/modules/meet/actions';
import history from '../../services/history';
import { deleteMeet } from '../../api/meet';
import Container from './styles';

export default function Details() {
	const { id } = useParams();
	const { meets } = useSelector(state=> state.meet);
	const dispatch = useDispatch();
	useEffect(()=>{
		 window.scrollTo(0, 0);
	},[]);
	const onClickCancel = () => {
		deleteMeet(id);
		history.push('/dashboard');
	}
	const onClickEdit = (id) => {
		history.push('/meet/edit/'+id);
	}
	const meet = meets.find(m => m.id === parseInt(id));
	return meet ? (
		<Container >
			<section className="header">
				<h2>{meet.title}</h2>
			<div>
					<button onClick={()=>onClickEdit(id)}>
						<MdModeEdit/>
						<span>Editar</span>
					</button>
					<button onClick={onClickCancel}>
						<MdDeleteForever/>
						<span>Cancelar</span>
					</button>
				</div>
			</section>
			<section className="body">
				<img src={meet.banner.url} />
				<p>{meet.description}</p>
				<p>
					<span>{meet.date}</span>
					<span>{meet.localization}</span>
				</p>
			</section>	
		</Container>
		) : (
			<h1>Loading...</h1>
		)
}


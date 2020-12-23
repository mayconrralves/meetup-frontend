import React, {useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import  pt  from 'date-fns/locale/pt-BR';
import { zonedTimeToUtc  } from 'date-fns-tz';
import history from '../../services/history';
import { deleteMeet } from '../../api/meet';
import Container from './styles';

export default function Details() {
	const { id } = useParams();
	const { meets } = useSelector(state=> state.meet);

	useEffect(()=>{
		 window.scrollTo(0, 0);
	},[]);
	const onClickCancel = () => {
		deleteMeet(id);
		toast.success("Meetup Deletado", {
		autoClose: 2000,
		style: {
			borderRadius:'16px',
		}
	});
		history.push('/dashboard');
	}
	const onClickEdit = (id) => {
		history.push('/meet/edit/'+id);
	}
	const meet = meets.find(m => m.id === parseInt(id));
	const date = zonedTimeToUtc(meet.date, "America/Sao_Paulo");
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
				<img src={meet.banner.url} alt='meet folder'/>
				<p>{meet.description}</p>
				<p>
					<span>
						{
							format(
									date, 
									"'Às' HH:mm' horas' 'de' dd 'de' MMMM 'de' yyyy",
									{locale: pt}
								)	

						}
					</span>
					<span>{meet.localization}</span>
				</p>
			</section>	
		</Container>
		) : (
			<h1>Loading...</h1>
		)
}


import React, {useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaCamera } from 'react-icons/fa';

import { format, add } from 'date-fns';
import  pt  from 'date-fns/locale/pt-BR';
import { zonedTimeToUtc  } from 'date-fns-tz';

import Container from './styles';

export default function FormMeet({ editMeet, handleSubmit }){
	const [banner, setBanner] = useState('');
	let inputFile = '';
	const imageSubmit = event => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = (e) => {
			setBanner(reader.result);
		}
		setBanner(event.target.files[0]);
	}
	const uploadClick = event=> {
		inputFile.click();
	}
	
	return  ( 
			<Container 
				image={ editMeet || banner ? true : false}
				method="post"
				onSubmit={handleSubmit}
				enctype="multipart/form-data"		
			>
				<fieldset>
					<legend> {editMeet ? 'Edite ' : 'Cadastre ' } seu Meetup <hr/></legend>
					<label htmlFor='file-selector'>
						<span><FaCamera/>Selecionar imagem</span>
						<img src={  banner ? banner : 
										 editMeet ? editMeet.banner.url : '' } 
										 onClick={uploadClick}
										 alt='Meet Folder'
						 />
					</label>
					
					<input name="image"
						   type="file"
						   id="file-selector"
						   onChange={imageSubmit} 
						   ref={ input => {
								inputFile = input;
							}}
					/>

					<input name="title" type="text" placeholder='Título do Meetup' defaultValue={ editMeet ? editMeet.title : '' } />
					<textarea name="description" placeholder='Descrição Completa' defaultValue={ editMeet ? editMeet.description : '' } />
					<div>
						<input 
							name="date" 
							type="date" 
							min={format(new Date(), 'yyyy-MM-dd' )} 
							defaultValue={ editMeet ? 
								format(zonedTimeToUtc(editMeet.date, "America/Sao_Paulo"), 'yyyy-MM-dd') 
								: format(new Date(), 'yyyy-MM-dd' )
							 }
						 />
						<input 
							name="time" 
							type="time"
							defaultValue={ editMeet ? 
								format(zonedTimeToUtc(editMeet.date, "America/Sao_Paulo"), 'HH:mm')
								: format(new Date() , 'HH:mm' )
							} 
						/>
					</div>
					<input name="localization" type="text" placeholder='Localização' defaultValue={ editMeet ? editMeet.localization : '' } />
				</fieldset>
				<button type="submit"><AiOutlinePlusCircle /><span>Salvar Meetup</span></button>
			</Container>
		)
}
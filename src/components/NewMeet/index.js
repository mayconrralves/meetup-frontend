import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { parseISO, isPast, isValid } from 'date-fns';
import FormMeet from '../FormMeet';
import { saveMeetRequest } from '../../store/modules/meet/actions';
export default function NewMeet(){
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const FILE_SIZE = 1000000;
	const SUPPORTED_FORMATS = [
     	"image/jpg",
    	"image/jpeg",
    	"image/gif",
    	"image/png"
    ];
	yup.setLocale({
			mixed: {
				required: (e) =>  `Preencha o campo ${e.path}`,
			},

	});
	const schema = yup.object().shape({
		title: yup.string().required(),
		description: yup.string().required(),
		localization: yup.string().required(),
		dateTime: yup.string()
				 .test(
				 	'isValid',
				 	'Data e/ou hora inválida(s)',
				 	value => value && isValid(parseISO(value))
				 	)
				 .test(
				 	'isPast',
				 	'Você não pode criar Meetup com data passada',
				 	value => value && !isPast(parseISO(value))
				 ),
			
		image : yup.mixed()
				   .required()
				   .test(
				   		"fileSize",
				   		"Imagem muito grande",
				   		value => value && value.size <= FILE_SIZE
				   	)
				   	.test(
				   		"fileFormat",
				   		"Formato da imagem não suportado",
				   		value => value && SUPPORTED_FORMATS.includes(value.type),
				   	)
	});	
	const handleSubmit = async ( event ) => {
		event.preventDefault();
		const title = event.target.title.value;
		const image = event.target.image.files[0];
		const description = event.target.description.value;
		const localization = event.target.localization.value;
		
		try {
			await schema.validate({
				title,
				image,
				description,
				localization,
				dateTime :  event.target.date.value+'T'+event.target.time.value,
			});
			dispatch(saveMeetRequest(
				{
					title,
					date: event.target.date.value+'T'+event.target.time.value+ ':00-03:00',
					description,
					localization
				},
				image	
			));
		} catch(err) {
			setError(err.errors ? err.errors[0] : null);
			window.scrollTo(0, 0);
		}
	}
	return (
		<FormMeet handleSubmit={handleSubmit} msgError={error} />
		)

}
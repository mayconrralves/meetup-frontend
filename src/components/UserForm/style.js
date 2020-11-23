import styled from 'styled-components';

const Form = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;

	input{
		border: 0;
		width: 303px;
		height: 50px;
		margin-bottom: 6px;
		border-radius: 4px;
		font-size: 18px;
		color: #fff;
		background-color: rgba(0,0,0, 0.3);
		padding: 0 0 0 12px;
		&::placeholder {
			color: #fff;
		}
		&:last-child{
			background-color: #f94d6a;
			font-weight: bold;
			width: 315px;
		}
	}
	
	}
		
`;

export default Form;
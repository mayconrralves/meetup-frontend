import styled from 'styled-components';

const Form = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	input{
		border: 0;
		width: 315px;
		height: 50px;
		margin-bottom: 6px;
		border-radius: 4px;
		font-size: 18px;
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
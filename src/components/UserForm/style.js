import styled from 'styled-components';

const Form = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 24px 0 12px 0;
	input{
		border: 0;
		width: 400px;
		height: 60px;
		margin-bottom: 12px;
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
			margin-top: 12px;
	}
	span {
		color: #fff;
		font-size: 1.2em;
		font-weight: bold;
		margin: 12px 0 15px 0;
		text-align: center;
	}
`;

export default Form;
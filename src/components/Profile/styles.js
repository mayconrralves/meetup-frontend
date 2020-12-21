import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	align-items: center;
	input {
		width: 70%;
		height: 50px;
		text-align: center;
		color: #FFF;
		background-color: rgba(0,0,0,0.3);
		margin-top: 12px;
		border: 0;
		border-radius: 4px;
	}
	button {
		width: 70%;
		background-color: #f94d6a;
		height: 50px;
		border: 0;
		border-radius: 4px;
		color: #FFF;
		font-weight: bold;
		font-size: 1em;
	}
`;
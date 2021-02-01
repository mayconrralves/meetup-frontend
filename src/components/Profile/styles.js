import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	fieldset {
		border: 0;
		display: flex;
		align-items: column;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin: 24px 0;
		padding: 0;
		legend {

			width: 70%;
			margin-left: 15%;
			color: #fff;
			font-size: 1.8em;
			opacity: 0.3;
			hr {
				margin: 6px 0 12px 0;
			}
		}
		.error {
			color: #fff;
			font-size: 1.4em;
			font-weight: bold;
			margin: 12px 0 15px 0;
			text-align: center;
		}
		label {
			color: #fff;
			font-size: 1.5em;
			width: 70%;
			opacity: 0.3;
			margin-top: 12px;

		}
		input {
			width: 70%;
			color: #fff;
			background-color: rgba(0,0,0,0.3);
			height: 50px;
			margin-top: 18px;
			border-radius: 4px;
			font-size: 1.5em;
			border-style: none;
			font-weight: bold;
			padding-left: 12px;
		}

	}
	button {
			width: 180px;
			margin-right: 15%;
			background-color: #f94d6a;
			height: 45px;
			color: #fff;
			border-radius: 4px;
			border-style: none;
			font-size: 1em;
			font-weight: bold;
		}
`;
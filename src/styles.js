import {  createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
	*{
		margin: 0;
		box-sizing: border-box;
	}
	html, body {
		
		width: 100%;
		height: 100%;
		background-image: linear-gradient(180deg, #22202c 0%, #402845 100%);;
		margin: 0px;
		a, h1, p, input {
			font-family: Helvetica;
			
		}
		
	}
`;

export default globalStyle;
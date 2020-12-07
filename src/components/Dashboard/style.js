import styled from 'styled-components';


const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	section{
		width: 70%;
		display: flex;
		margin: 40px auto;
		justify-content: space-between;
	h2 {
		color: #FFF;
		font-size: 2em;
	}
	button {
		background-color: #f94d6a;
		color: #FFF;
		width: 140px;
		height: 35px;
		border-style: none;
		border-radius: 4px;
		font-size: 1em;
		display: flex;
		align-items: center;
		font-weight: bold;
		svg {
			font-size: 1.2em;
		}
		span {
			padding-left: 3px;
		}
	}
	}
	
`;

export default Container;
import styled from 'styled-components';

const Container = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 70%;
	padding: 0;
	
	li {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		color: #FFF;
		padding: 16px 20px;
		margin: 4px 0;
		background-color: rgba(0,0,0, 0.13);
		list-style: none;
		.title{
			font-weight: bold;
			font-size: 1.3em;
		}
		span {
			padding-right: 30px;
		}
		a {
			text-decoration: none;
		}
	}
`;

export default Container;
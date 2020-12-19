import styled from 'styled-components';

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	section.header {
		width: 70%;
		margin: 50px 0;
		display: flex;
		justify-content: space-between;
		h2 {
			color: #FFF;
			font-size: 2em;
		}
		div {
			width: 270px;
			display: flex;
			justify-content: flex-end;
			button {	
				color: #FFF;
				background-color:  #f94d6a;
				width: 120px;
				height: 35px;
				border-radius: 4px;
				border-style: none;
				font-size: 1em;
				margin-left: 12px;
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					font-size: 1em;	
				}
				span {
					padding-left: 5px;
				}
			}
		}
	}
	section.body {
		width: 70%;
		img {
			width: 100%;
			margin-bottom: 35px;
	}

	p {
		margin-bottom: 35px;
		font-size: 1.2em;
		display: flex;
		flex-wrap: wrap;
		span {
			padding-right: 25px;
			opacity: 0.5;
			font-size: 0.8em;
		}
	}
	}
`;

export default Container;
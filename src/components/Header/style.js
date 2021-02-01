import styled from 'styled-components';


const Container = styled.div`
	background-color: rgba(0, 0,0,0.3);
	display: flex;
	justify-content: center; 
	.header {
		width: 70%;
		height: 80px;
		display: flex;
		
		justify-content: space-between; 
		align-items: center;
		nav {
			width: 30%;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: flex-end; 
			div {
				display: flex;
				flex-direction: column;
				padding-right: 32px;
				span, a {
					font-size: 1.1em;
					font-weight: bold;
					

					&:last-child {
					padding-top: 3px;
					opacity: 0.4;
					font-size: 0.7em;
					text-align: right;
					font-weight: normal;
				}
				}
			}
			button {
				width: 80px;
				height: 40px;
				border-radius: 4px;
				border-style: none;
				background-color: #f94d6a;
				color: #fff;
				font-size: 1em;
				font-weight: bold;
			}
		}
	}
	
`;


export default Container;
import styled from 'styled-components';

const Container = styled.form`
	
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 25px;
	fieldset {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-style: none;
		padding: 0;
		legend {
			width: 70%;
			margin-left: 15%;
			margin-bottom: 30px;
			color: #FFF;
			font-size: 1.6em;
			font-weight: bold;
			opacity: 0.4;
			hr {
				margin-top: 8px;
				border-top: 3px;
			}
		}
		label {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 70%;
			height:  ${props=>props.image ? 'auto' : '300px'};
			margin-bottom: 12px;
			background-color: rgba(0,0,0,0.13);
			img {
				display: ${props=>props.image ? 'inline' : 'none'};
				max-width: 800px;
			  }
			span {
				display: flex;
				align-items: center;
				position: absolute;
				font-weight: bold;
				color: #FFF;
				opacity: 0.3;
				font-size: 2em;
				top: 45%;
				left: 32%;
				svg {
					padding-right: 6px;
					font-size: 1.2em;
				}
			}
		}
		input {
			margin-top: 10px;
			width: 70%;
			height: 45px;
			font-size: 1em;
			border-radius: 4px;
			background-color: rgba(0,0,0, 0.13);
			border-style: none;
			padding: 20px;
			color: #FFF;
			&[type='file'] {
	  			display: none;
			}

			&input[type=date] {
				dateFormat: 'dd-mm-yyyy'
			}

		}
		div {
				width: 70%;
				justify-content: space-between;
				display: flex;
				input {
					width: 47%;
					&::-webkit-calendar-picker-indicator{
						filter: invert(50%);
						
					}
				}

			}

		textarea {
			margin-top: 10px;
			font-size: 1.3em;
			width: 70%;
			height: 200px;
			padding: 20px;
			border-radius: 4px;
			background-color: rgba(0,0,0, 0.13);
			border-style: none;
			color: #FFF;

		}
	}

	button {
		margin-top: 20px;
		margin-bottom: 20px;
		margin-right: 15%;
		background-color: #f94d6a;
		border-style: none;
		border-radius: 4px;
		width: 150px;
		height: 45px;
		color: #FFF;
		font-weight: bold;
		font-size: 1em;
		
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			padding-right: 6px;
			font-size: 1.5em;
			font-weight: bold;
		}

	}
`;

export default Container;
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #3b393b;
	border: none;

	h3 {
		color: #fff;
		font-weight: 400;
		font-size: 25px;
	}

	.seletor {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		padding: 2%;
		text-align: center;
		white-space: nowrap;
	}
	.seletor h3{
		font-size: 1.5rem;
		margin-right: 20px;
		text-align: center;
	}

	p {
		color: #fff;
		font-size: 30px;
		font-weight: 400;
		margin-top: 8vh;
		margin-bottom: 8vh;
	}

	select {
		width: 100%;
		min-width: 22ch;
		max-width: 30ch;
		border: 1px solid var(--select-border);
		border-radius: 0.25em;
		padding: 0.25em 0.5em;
		/* margin-top: 5%; */
		font-size: 1.25rem;
		cursor: pointer;
		line-height: 1.1;
		background-color: #fff;
		background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
		text-align-last: center;
	}
`;

export const ListCards = styled.ul`
	display: flex;
	justify-content: center;
	/* justify-self: center; */
	max-width: 1200px;
	/* padding: 20px; */
	height: 60%;
	width: 100%;
	gap: 5%;
`;

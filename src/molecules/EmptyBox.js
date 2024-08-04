import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';

const Container = styled.div`
	height: 180px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #3178C6;

	@media screen and (max-width: 480px) {
		height: 150px;
	}
`;

const TypicalText = styled.p`
	color: white;
	font-size: 24px;
	text-align: center;
	font-family: "Raleway", sans-serif;
	font-weight: 500;
`;

const steps = [
	'Hello 👋', 3000,
  'Come join us', 2000,
  'Support Sustainable Fashion', 2000,
  'Change the world', 1000,
  'Start the Slow Fashion', 2000,
  'And...', 4000,
  'Download our app!', 5000,
]

const EmptyBox = () => {
	return (
		<div>
			<Container>
				<TypicalText>
				<Typical wrapper='span' steps={steps} loop={1} className={'caca'}/>
				</TypicalText>
			</Container>
		</div>
	)
}

export default EmptyBox;
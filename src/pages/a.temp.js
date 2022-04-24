import React from 'react';
import styled from 'styled-components';

const Hero = () => {
	return (
		<Section>
			<ContentWrapper>
				<StyledH1>Shopperbird</StyledH1>
			</ContentWrapper>
		</Section>
	);
};

export default Hero;

const Section = styled.section`
	background-color: #000;
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 864px) {
		height: 100vh;
		flex-direction: row-reverse;
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 864px) {
		align-items: flex-start;
		height: 100%;
		width: 35%;
		gap: 1rem;
		padding-left: 4rem;
	}
`;

const StyledH1 = styled.h1`
	position: relative;
	color: #fff;
	font-size: 2.2rem;
	font-weight: 300;
	text-align: center;
	margin: 0;
	@media (min-width: 864px) {
		font-size: 2.5rem;
		text-align: start;
	}
`;
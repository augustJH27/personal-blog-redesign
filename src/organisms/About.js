import React from 'react';
import styled from 'styled-components';
import AboutSection from '../molecules/AboutSection';

const About = () => {
	return (
		<Container>
			<SectionWrapper>
				<AboutSection
					imgsrc='/images/recycle.svg'
					imgalt='Investments'
					title='Upcycle'
					content='No BRANDS or middle men! Just you and a talented Fashion Designer.'
				/>
				<AboutSection
					imgsrc='/images/designers.svg'
					imgalt='Designers'
					title='Designers'
					content='Crafted and tailored by our talented designers'
				/>
				<AboutSection
					imgsrc='/images/users.svg'
					imgalt='Users'
					title='Users'
					content='More than +1000 users has joined from around the world'
				/>
			</SectionWrapper>
		</Container>
	);
};

export default About;

const Container = styled.div`
	width: 100vw;
	padding: 24px 48px;
  background: #000;
  color: #fff;

	/* display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--light-grayish-blue); */
	/* padding-bottom: 2rem; */

	
	@media screen and (max-width: 480px) {
		padding: 24px;
		/* padding-left: 4rem; */
		/* align-items: flex-start;
		text-align: start; */
	}
`;

const SectionWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
	padding-top: 8px;

	@media screen and (max-width: 480px) {
		gap: 1.5rem;
	}
`;
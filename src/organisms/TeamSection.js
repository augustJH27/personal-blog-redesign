import React from 'react';
import styled from 'styled-components';
import Team from '../molecules/Team';

const TeamSection = () => {
	return (
		<Container>
			<WrapperText>
				<StyledH1>Our Team</StyledH1>
			</WrapperText>
			<SectionWrapper>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Investments'
					title='Paolo Casula'
					content='CEO & Founder'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
					imgsrc='/images/ceo.png'
					imgalt='Designers'
					title='Millie Hoole'
					content='Head of Fashion Designer'
				/>
				<Team
				imgsrc='/images/ceo.png'
				imgalt='Designers'
				title='Millie Hoole'
				content='Head of Fashion Designer'
				/>
				<Team
				imgsrc='/images/ceo.png'
				imgalt='Designers'
				title='Millie Hoole'
				content='Head of Fashion Designer'
				/>
				<Team
				imgsrc='/images/ceo.png'
				imgalt='Designers'
				title='Millie Hoole'
				content='Head of Fashion Designer'
				/>
				<Team
				imgsrc='/images/ceo.png'
				imgalt='Designers'
				title='Millie Hoole'
				content='Head of Fashion Designer'
				/>				
			</SectionWrapper>
		</Container>
	);
};

export default TeamSection;

const Container = styled.div`
	width: 100vw;
	margin: 160px 0px;
	padding: 24px 48px;
  background: #000;
  color: #fff;
	justify-content: center;

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

const StyledH1 = styled.h1`
	font-weight: 400;
	color: white;
	font-family: 'Cardo';
	font-size: 64px;
	text-align: center;
	@media (min-width: 864px) {
		text-align: center;
		/* padding-left: 4rem; */
	}
`;

const WrapperText = styled.div`
	justify-content: center;
	padding: 72px 0px;
`

const SectionWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
	padding-top: 8px;
	grid-column-gap: 20px;
	grid-row-gap: 20px;

	@media screen and (max-width: 480px) {
		gap: 1.5rem;
	}
`;
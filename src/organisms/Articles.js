import React from 'react';
import ArticleSection from '../molecules/ArticleSection';
import styled from 'styled-components';

const Articles = () => {
	return (
		<Wrapper>
			<StyledH1>Our Team</StyledH1>
			<ArticleWrapper>
				<ArticleSection
					imgsrc='/images/ceo.png'
					imgalt='Various currencies from different nations'
					author='Claire Robinson'
					title='Hugh Jackmann'
					content='Founder and CEO'
				/>
				<ArticleSection
					imgsrc='/images/ceo.png'
					imgalt='A luxurious meal inside fo a fine-dining restaurant.'
					author='Wilson Hutton'
					title='Hugh Jackmann'
					content='Founder and CEO'
				/>
				<ArticleSection
					imgsrc='/images/ceo.png'
					imgalt='View of the horizion from the inside of a plane.'
					author='Wilson Hutton'
					title='Hugh Jackmann'
					content='Founder and CEO'
				/>
				<ArticleSection
					imgsrc='/images/ceo.png'
					imgalt='A closeup photo of falling confetti.'
					author='Claire Robinson'
					title='Hugh Jackmann'
					content='Founder and CEO'
				/>
				<ArticleSection
					imgsrc='/images/ceo.png'
					imgalt='A closeup photo of falling confetti.'
					author='Claire Robinson'
					title='Hugh Jackmann'
					content='Founder and CEO'
				/>
			</ArticleWrapper>
			
		</Wrapper>
	);
};

export default Articles;

const Wrapper = styled.div`
	background-color: #000;
	padding: 4rem 0;
	align-items: center;
	border-radius: 50%;
`;

const ArticleWrapper = styled.div`
	@media (min-width: 864px) {
		display: flex;
		background: #000;
		margin: 0 4rem;
		gap: 1.5rem;
	}
`;

const StyledH1 = styled.h1`
	font-weight: 300;
	color: white;
	text-align: center;
	@media (min-width: 864px) {
		text-align: center;
		/* padding-left: 4rem; */
	}
`;

import Image from "next/image";
import styled from 'styled-components';

const LightContainer = styled.div`
	height: 100%;
	width: 100vw;
	background: #fff;
	padding: 96px 48px;
	
	@media screen and (max-width: 768px){
    padding-top: 80px;
		padding-bottom: 80px;
  }

  @media screen and (max-width: 480px){
    padding-top: 56px;
		padding-bottom: 56px;
  }
`;

const HeadingH3 = styled.h3`
	color: black;
	font-size: 36px;
	font-family: 'Cardo', serif;
	font-weight: 400;

	@media screen and (max-width: 768px){
		font-size: 24px;
	}

	@media screen and (max-width: 480px){
		text-align: center;
		font-size: 20px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	/* min-height: 600px; */
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px){
		display: flex;
	}

	@media screen and (max-width: 480px){
		flex-direction: column;
	}
`;

const ImgWrapper = styled.div`
	/* width: 100vw; */
	max-width: 700px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px){
		padding: 0px 24px;
	}

	@media screen and (max-width: 480px){
		padding: 0px 24px;
	}

`;

const TextWrapper = styled.div`
	width: 600px;
	padding-left: 72px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px){
		padding: 24px 24px;
	}

	@media screen and (max-width: 480px){
		padding: 24px 24px;
		width: 100vw;
	}

`;


const ButtonCTA = styled.button`
  border-radius: 4px;
  font-family: 'Cardo', serif;
  background: #000;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  width: 50%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

const FirstSection = () => {
  return (
		<LightContainer>
			<Wrapper>
				<ImgWrapper>
						<Image src="/images/07.jpg" alt="shopperbird-img" width={700} height={467} />
					</ImgWrapper>
					<TextWrapper>
						<HeadingH3>
						Lorem Ipsum dolor sir amet consequetur 
					</HeadingH3>
				</TextWrapper>
			</Wrapper>
		</LightContainer>
  );
};

export default FirstSection;
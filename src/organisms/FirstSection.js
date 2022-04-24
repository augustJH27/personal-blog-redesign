import Image from "next/image";
import styled from 'styled-components';

const LightContainer = styled.div`
	height: 100%;
	width: 100vw;
	background: #000;
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
	color: #fff;
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

// const LightContainer = styled.div`
// 	height: 100%;
// 	width: 100vw;
// 	background: #000;
// 	padding: 96px 48px;
	
// 	@media screen and (max-width: 768px){
//     padding-top: 80px;
// 		padding-bottom: 80px;
//   }

//   @media screen and (max-width: 480px){
//     padding-top: 56px;
// 		padding-bottom: 56px;
//   }
// `;

// const HeadingH2 = styled.h2`
// 	color: #fff;
// 	font-size: 36px;
// 	font-family: 'Lora', serif;

// 	@media screen and (max-width: 768px){
// 		font-size: 28px;
// 	}

// 	@media screen and (max-width: 480px){
// 		font-size: 24px;
// 	}
// `;

// const ImgWrapper = styled.div`
// 	width: 100vw;
// 	height: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;

// 	@media screen and (max-width: 768px){
// 		padding: 0px 24px;
// 	}

// 	@media screen and (max-width: 480px){
// 		padding: 0px 24px;
// 	}

// `;

// const Wrapper = styled.div`
// 	display: flex;
// 	width: 100%;
// 	min-height: 600px;
// 	justify-content: center;
// 	align-items: center;

// 	@media screen and (max-width: 768px){
// 		display: flex;
// 	}

// 	@media screen and (max-width: 480px){
// 		flex-direction: column;
// 	}
// `;

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
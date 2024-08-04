import React from 'react';
import styled from 'styled-components';

const Team = ({ imgsrc, imgalt, title, content }) => {
	return (
		<Wrapper>
      <ImageWrapper src={imgsrc} alt={imgalt} width='56' height='56' fill='white'/>
      <WrapperInfo>
      <StyledH5>{title}</StyledH5>
      <StyledP>{content}</StyledP>
      </WrapperInfo>
		</Wrapper>
	);
};

export default Team;

const Wrapper = styled.div`
  width: 150px;
  margin: 0 2rem;
  line-height: 2;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */

  @media (min-width: 864px) {
		/* text-align: center;
    align-items: center;
    justify-content: center; */
    /* padding-left: 1rem; */
	}
`;

const ImageWrapper = styled.img`
  height: 150px;
  border-radius: 50%;
  min-width: 150px;
  max-width: 100%;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const StyledH5 = styled.h5`
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-align: center;
  font-family: 'Lora', serif;
  font-style: italic;

`;

const StyledP = styled.p`
  color: black;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  font-family: "Raleway", sans-serif;

	@media (min-width: 864px) {
    /* padding-left: 0; */
	}
`;

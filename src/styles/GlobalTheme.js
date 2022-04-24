import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;


export const ContainerWhite = styled.div`
	width: 100vw;
	height: 100%;
	padding: 80px 120px;
	background: #fff;
	color: #000;

	@media screen and (max-width: 480px) {
		padding: 56px 24px;
	}
`;

export const ContainerBlack = styled.div`
	width: 100vw;
	height: 100%;
	padding: 80px 120px;
	background: #000;
	color: #fff;

	@media screen and (max-width: 480px) {
		padding: 56px 24px;
	}
`;

export const LightH2 = styled.h2`
    color: #fff;
    font-size: 56px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`;

export const DarkH2 = styled.h2`
    color: #000;
    font-size: 48px;
    text-align: center;
    margin: 20px 0;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const ButtonNew = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#000' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
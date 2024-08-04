import styled from 'styled-components';

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
    }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1005;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroHeading = styled.h1`
  color: #fff;
  font-size: 64px;
  text-align: center;
  font-family: 'Cardo', serif;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }

  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 60px;
	justify-content: center;
	flex-flow: wrap;
	gap: 24px;
`;

const HeroSection = () => {
  return (
    <HeroContainer if='home'>
      <HeroBg>
        <VideoBg src='/images/video.mp4' autoPlay loop muted type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroHeading>Welcome to my page</HeroHeading>
        <HeroP>
        Have a seat and enjoy my story
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
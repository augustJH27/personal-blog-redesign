import styled from 'styled-components';
import { flex, FontSize } from '../../styles/mixins';
import styles from './styles.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Wrapper = styled.section`
  height: 100vh;
  background-color: #000;
  position: relative;
`;

export const Container = styled.div`
  ${flex}
  width: 100%;
`;

export const Header = styled.h1`
  font-size: ${FontSize.heroHeadline};
  color: #fff;
`;

export const Arrow = styled(AiOutlineArrowDown)`
  font-size: 14rem;
  // margin-top: 4rem;
  color: #000;
`;

export const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  /* background-image: url('../../../public/assets/image/cherry.jpg'); */
  background-size: cover;
  background-position: 0% 0%;
`;

export default function Hero() {
  return (
    <Wrapper>
      <PageContainer>
        <Container>
          <Header>Creating Since The Start</Header>
        </Container>
        </PageContainer>
    </Wrapper>
  );
}

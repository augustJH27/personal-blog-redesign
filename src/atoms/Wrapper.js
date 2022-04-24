import React from 'react'
// import styles from './Wrapper.module.scss';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	padding: 0 7%;

	@media screen and (min-width: 700px) {
		padding: 0 10%;
	}

	@media screen and (min-width: 1600px) {
		padding: 0 22.5%;
	}
`;

const Wrapper = ({ children }) => {
	return <Container>{children}</Container>
	// return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper

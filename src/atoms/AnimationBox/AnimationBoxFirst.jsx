import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
	height: 120px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fff;

	@media screen and (max-width: 480px) {
		height: 100px;
	}
`;

const Text = styled.h3`
	color: black;
	font-size: 24px;
	text-align: center;
	font-family: 'Lora', serif;
	font-style: italic;
	font-weight: 500;
`;

const AnimationBoxRight = () => {
	useEffect(() => {
		AOS.init({
			duration: 3000
		});
	}, [])


	return (
		<div>
			<Container id='animation-box' data-aos='fade-right' data-aos-duration='800'>
				<Text>
					Section 1
				</Text>
			</Container>
		</div>
	)
}

export default AnimationBoxRight;
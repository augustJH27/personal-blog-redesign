import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MobileMenu from '../molecules/MobileMenu';
import InviteButton from '../atoms/InviteButton';
import Link from 'next/link';
// import DesktopMenu from '../molecules/DesktopMenu';

const Header = () => {
	const [windowWidth, setWindowWidth] = useState(null);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		return () => window.removeEventListener('resize', () => console.log('Cleanup!'));
	}, []);

	return (
		<Wrapper>
			<Link href='/' passHref>
			<img src='/images/logoblck.svg' alt='Shopperbird logo' width='32' height='32'></img>
			</Link>
			{windowWidth > 864 ? (
				<>
					{/* <DesktopMenu /> */}
					<Link href='/coming-soon' passHref>
					<InviteButton />
					</Link>
				</>
			) : (
				<MobileMenu />
			)}
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 80px;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: #000;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
	img {
		cursor: pointer;
	}
	@media (min-width: 864px) {
		padding: 0 4rem;
	}
`;

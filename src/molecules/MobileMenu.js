import React, { useState } from 'react';
import styled from 'styled-components';
import InviteButton from '../atoms/InviteButton';

const MobileMenu = () => {
	const [isShowing, setIsShowing] = useState(false);

	const handleClick = () => {
		setIsShowing(!isShowing);
	};

	return (
		<Wrapper>
			{isShowing === false ? (
				<svg onClick={handleClick} xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24' height='24'>
					<g fill='#fff' fillRule='evenodd'>
						<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
						{/* <path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' /> */}
					</g>
				</svg>
			) : (
				<svg onClick={handleClick} xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='24' height='24'>
					<g fill='#fff' fillRule='evenodd'>
					<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
						{/* <path d='M.868.661l16.97 16.97-.706.708L.162 1.369z' />
						<path d='M.161 17.632L17.131.662l.708.706-16.97 16.97z' /> */}
					</g>
				</svg>
			)}
			{isShowing ? (
				<DropdownMenu>
					<StyledAnchor href='/' passHref>Home</StyledAnchor>
					<StyledAnchor href='/about' passHref>About</StyledAnchor>
					<StyledAnchor href='/blog' passHref>Blog</StyledAnchor>
					<InviteButton href='/coming-soon' passHref/>
				</DropdownMenu>
			) : null}
		</Wrapper>
	);
};

export default MobileMenu;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	svg {
		cursor: pointer;
	}
`;

const DropdownMenu = styled.nav`
	display: ${(props) => (props.isShowing ? 'block' : 'none')};
	position: fixed;
	width: 90%;
	height: 300px;
	top: 70px;
	left: 5%;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.3rem;
	background-color: #000;
	box-shadow: 0 50px 100px 50px rgba(45, 49, 77, 0.4);
`;

const StyledAnchor = styled.a`
	display: block;
	color: white;
	cursor: pointer;
	font-weight: 400;
`;

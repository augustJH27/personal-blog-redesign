import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledBtn = styled.button`
	color: white;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	border-radius: 20px;
	border: solid 2px white;
	padding: 12px 30px;
	background: #000;
	white-space: nowrap;
	cursor: pointer;
	&:hover {
		background: #000;
	}
`;


const InviteButton = () => {
  return (
		<Link href='/coming-soon' passHref>
		<StyledBtn>Get Our App!</StyledBtn>
		</Link>
  );
};


// const InviteButton = () => {
// 	return (
// 		<StyledBtn>Get Our App!</StyledBtn>;
// 	)
// };

export default InviteButton;
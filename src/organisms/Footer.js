import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #FFFDF9;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 64px;
  padding-bottom: 44px;
  text-align: center;
  font-family: 'Arial, sans-serif';

	@media screen and (max-width: 768px) {
		padding: 40px 20px;
	}
`;

const Logo = styled.div`
  display: flex;
  margin-bottom: 32px;

	@media screen and (max-width: 768px) {
		margin-bottom: 12px;
	}
`;

const LogoImage = styled.img`
  width: 262px;
  height: auto;

	@media screen and (max-width: 768px) {
		width: 200px;
	}
`;


const Tagline = styled.p`
  font-size: 20px;
  line-height: 36px;
  font-family: 'Raleway';
  font-weight: 300;
  color: #000000;
  text-align: left;
  max-width: 420px;

	@media screen and (max-width: 768px) {
    font-size: 16px;
		line-height: 32px;
  }
`;

const SubscriptionSection = styled.div`
  text-align: justify;

	@media screen and (max-width: 768px) {
    display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
  }
`;

const SubscriptionInput = styled.input`
  padding-left: 16px;
  padding-top: 11px;
  padding-bottom: 11px;
  font-family: 'Cardo';
  font-size: 20px;
	margin-right: 8px;
  color: #000;
  border: 1px solid #7F8084;
  width: 240px;
  border-radius: 8px;

	@media screen and (max-width: 768px) {
    width: 80%;
  }

`;

const SubscribeButton = styled.button`
  padding: 14px 20px;
  background-color: #A4B7AD;
  font-size: 20px;
  font-family: 'Raleway';
  font-weight: 600;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #C8F2DC;
    color: #98bbe2;
    transition: 0.3s ease-out;
  }

	@media screen and (max-width: 768px) {
    max-width: 220px;
  }
`;

const FlexContainerSiteMap = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
    align-items: center;
		display: block;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;

const FooterLinkItems = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  grid-row-gap: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  // color: #000;

  @media screen and (max-width: 768px) {
    margin: 0;
    width: 100%;
		grid-row-gap: 12px;
		grid-column-gap: 40px;
  }
`;

const FooterLinkTitle = styled.h3`
  margin-bottom: 16px;
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: 700;
  color: #000;
	text-align: justify;
	text-decoration: underline;
`;

const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-family: 'Raleway';
  font-size: 20px;
	font-weight: 500;

  &:hover {
    color: #C8F2DC;
    transition: 0.3s ease-out;
  }

	@media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #A4B7AD;
  padding-top: 20px;
	margin-top: 64px;
  display: flex;
	flex-direction: row;
  justify-content: space-between;
  align-items: center;

@media screen and (max-width: 768px) {
    flex-direction: column;
  }

`;

const FlexContainer = styled.div`
	display: flex;
	gap: 20px;
	flex-direction: column;
`;

const FlexMainContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
    flex-direction: column;
		gap: 40px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

	@media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;

    &:hover {
    color: #C8F2DC;
    transition: 0.3s ease-out;
  }
`;

const FooterText = styled.p`
	color: #000;
	font-size: 16px;
	font-weight: 400;
	font-family: 'Raleway';
`;

const LegalWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;

	@media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
		margin-bottom: 24px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <LogoImage src="./images/27-logo.svg" />
      </Logo>
			<FlexMainContainer>
			<FlexContainer>
			<Tagline>Thoughtful minds will haunt your bewildered imaginations at night.</Tagline>
      <SubscriptionSection>
        <SubscriptionInput type="email" placeholder="Your email" />
        <SubscribeButton>Subscribe</SubscribeButton>
      </SubscriptionSection>
			</FlexContainer>
			<FlexContainerSiteMap>
			<FooterLinkTitle>Site map</FooterLinkTitle>
			<FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink href='/' passHref>Home</FooterLink>
            <FooterLink href='/blog' passHref>Blog</FooterLink>
						<FooterLink href='/projects' passHref>Projects</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink href='/reviews' passHref>Review</FooterLink>
            <FooterLink href='/about' passHref>About</FooterLink>
            <FooterLink href='/shop' passHref>Shop</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
			</FlexContainerSiteMap>
			<FlexContainerSiteMap>
			<FooterLinkTitle>Socials</FooterLinkTitle>
			<FooterLinksWrapper>
			<SocialIcons>
            <SocialIconLink
              href={
                'https://www.facebook.com/profile.php?id=100053899892955'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink 
              href={
                'https://www.instagram.com/_realbitj/?hl=en'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
						<SocialIconLink 
              href={
                'https://soundcloud.com/joy-agustian'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'>
              <FaSoundcloud />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://twitter.com/WeLivein1'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink 
              href={
                'https://www.linkedin.com/company/shopperbird/?viewAsMember=true'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </FooterLinksWrapper>
			</FlexContainerSiteMap>
			</FlexMainContainer>
      
      <FooterBottom>
				<LegalWrapper>
				<FooterText>Privacy Policy</FooterText>
				<FooterText>Terms and Conditions</FooterText>
				</LegalWrapper>
				<FooterText>© 2024 Joy Agustian. All Rights Reserved</FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
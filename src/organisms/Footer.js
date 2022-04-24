import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

const ButtonFooter = styled.button`
  border-radius: 4px;
  font-family: 'Cardo', serif;
  background: #000;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

const FooterContainer = styled.div`
  background-color: #000;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

const FooterSubHeading = styled.p`
  font-family: 'Cardo', serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  font-family: 'Cardo', serif;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-family: 'Cardo', serif;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #000;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px;
  gap: 12px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 24px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h3`
  margin-bottom: 16px;
  font-family: 'Cardo', serif;
  font-size: 24px;
  font-weight: 700;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: 'Cardo', serif;
  font-size: 12px;

  &:hover {
    color: #fff;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const WebsiteRights = styled.small`
  color: #fff;
  font-size: 12px;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;


function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <ButtonFooter fontBig>Subscribe</ButtonFooter>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About</FooterLinkTitle>
            <FooterLink href='/about' passHref>Our Story</FooterLink>
            <FooterLink href='/'>Benefits</FooterLink>
            <FooterLink href='/'>Teams</FooterLink>
            <FooterLink href='/'>Careers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Blog</FooterLinkTitle>
            <FooterLink href='/blog' passHref>News</FooterLink>
            <FooterLink href='/'>Upcycle Fashion</FooterLink>
            <FooterLink href='/'>Design</FooterLink>
            <FooterLink href='/'>Sustainability Fashion</FooterLink>
          </FooterLinkItems>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterLink href='/'>Terms & Conditions</FooterLink>
            <FooterLink href='/'>Privacy Policy</FooterLink>
            <FooterLink href='/'>Terms of Use</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterLink href='/'>Terms & Conditions</FooterLink>
            <FooterLink href='/'>Privacy Policy</FooterLink>
            <FooterLink href='/'>Terms of Use</FooterLink>
          </FooterLinkItems>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Blog</FooterLinkTitle>
            <FooterLink href='/blog' passHref>News</FooterLink>
            <FooterLink href='/'>Upcycle Fashion</FooterLink>
            <FooterLink href='/'>Design</FooterLink>
            <FooterLink href='/'>Sustainability Fashion</FooterLink>
            <FooterLink href='/'>Influencer</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          {/* <SocialLogo href='/'>
            <SocialIcon src="./assets/logoblck.svg"/>
            Shopperbird
          </SocialLogo> */}
          <WebsiteRights>Shopperbird © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={
                'https://web.facebook.com/shopperbird23?_rdc=1&_rdr'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink 
              href={
                'https://www.instagram.com/shopperbird.app/?hl=en'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/channel/UC9T1e-cwDhgeXeVM2YcErFw'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://twitter.com/Shopperbird1'
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
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
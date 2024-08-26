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
  background: #225389;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #98bbe2;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    width: 50%;
  }
`;

const FooterContainer = styled.div`
  background-color: #3178C6;
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
  color: #000;

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
  color: white;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: 'Cardo', serif;
  font-size: 12px;

  &:hover {
    color: #98bbe2;
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
  color: #3178C6;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SocialIcon = styled.img`
  width: 240px;
  height: 36px;

  @media screen and (max-width: 820px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  font-size: 12px;
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

  &:hover {
    color: #98bbe2;
    transition: 0.3s ease-out;
  }
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
            <FooterLink href='/about' passHref>My Story</FooterLink>
            <FooterLink href='/'>Portfolio</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Blog</FooterLinkTitle>
            <FooterLink href='/blog' passHref>Books</FooterLink>
            <FooterLink href='/'>Short Story</FooterLink>
            <FooterLink href='/'>Poem</FooterLink>
            <FooterLink href='/'>Review</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>Karma Agency © 2022</WebsiteRights>
          <a href='/'>
          <SocialIcon src="./images/27-raw-logo.svg" />
          </a>
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
                'https://www.instagram.com/_realbitj/?hl=en'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Instagram'>
              <FaInstagram />
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
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;

// import React from 'react';
// import styled from 'styled-components';

// const FooterContainer = styled.footer`
//   background-color: #FFFDF9;
//   padding-left: 80px;
//   padding-right: 80px;
//   padding-top: 64px;
//   padding-bottom: 44px;
//   text-align: center;
//   font-family: 'Arial, sans-serif';
// `;

// const Logo = styled.div`
//   display: flex;
//   // align-items: center;
//   // justify-content: center;
//   margin-bottom: 32px;
// `;

// const LogoImage = styled.img`
//   width: 262px;
//   height: auto;
// `;

// const LogoText = styled.h1`
//   font-size: 1.5rem;
//   font-weight: 400;
//   color: #333;
// `;

// const Tagline = styled.p`
//   font-size: 20px;
//   line-height: 36px;
//   font-family: 'Raleway';
//   font-weight: 300;
//   color: #000000;
//   margin-bottom: 20px;
//   text-align: left;
//   max-width: 420px;
// `;

// const SubscriptionSection = styled.div`
//   margin-bottom: 20px;
//   text-align: justify;
// `;

// const SubscriptionInput = styled.input`
//   padding-left: 16px;
//   padding-top: 11px;
//   padding-bottom: 11px;
//   font-family: 'Cardo';
//   font-size: 20px;
//   color: #000;
//   margin-right: 12px;
//   border: 1px solid #7F8084;
//   width: 240px;
//   border-radius: 8px;
// `;

// const SubscribeButton = styled.button`
//   padding: 14px 20px;
//   background-color: #A4B7AD;
//   font-size: 20px;
//   font-family: 'Raleway';
//   font-weight: 600;
//   color: #000;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: #C8F2DC;
//   }
// `;

// const SiteMap = styled.div`
//   margin: 20px 0;
//   display: flex;
//   justify-content: center;
// `;

// const SiteMapList = styled.ul`
//   list-style: none;
//   margin: 0 20px;
//   padding: 0;
// `;

// const SiteMapItem = styled.li`
//   margin: 8px 0;
//   font-size: 20px;
//   font-family: 'Raleway';
//   line-height: 32px;
//   color: #000;
//   font-weight: 500;
// `;

// const ConnectSection = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const IconLink = styled.a`
//   margin: 0 10px;
//   color: #333;
//   font-size: 1.5rem;
// `;

// const FooterBottom = styled.div`
//   border-top: 1px solid #ccc;
//   padding-top: 10px;
//   font-size: 0.8rem;
//   color: #666;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <Logo>
//         <LogoImage src="./images/27-logo.svg" />
//       </Logo>
//       <Tagline>Thoughtful minds will haunt your bewildered imaginations at night.</Tagline>
      
//       <SubscriptionSection>
//         <SubscriptionInput type="email" placeholder="Your email" />
//         <SubscribeButton>Subscribe</SubscribeButton>
//       </SubscriptionSection>
      
//       <SiteMap>
//         <SiteMapList>
//           <SiteMapItem>Home</SiteMapItem>
//           <SiteMapItem>Blog</SiteMapItem>
//           <SiteMapItem>Projects</SiteMapItem>
//         </SiteMapList>
//         <SiteMapList>
//           <SiteMapItem>Review</SiteMapItem>
//           <SiteMapItem>About</SiteMapItem>
//           <SiteMapItem>Shop</SiteMapItem>
//         </SiteMapList>
//       </SiteMap>
      
//       <ConnectSection>
//         <IconLink href="#"><i className="fab fa-instagram"></i></IconLink>
//         <IconLink href="#"><i className="fab fa-twitter"></i></IconLink>
//         <IconLink href="#"><i className="fab fa-pinterest"></i></IconLink>
//         <IconLink href="#"><i className="fab fa-facebook"></i></IconLink>
//         <IconLink href="#"><i className="fab fa-youtube"></i></IconLink>
//       </ConnectSection>
      
//       <FooterBottom>
//         <div>© 2024 Joy Agustian. All Rights Reserved</div>
//         <div>
//           <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-conditions">Terms and Conditions</a>
//         </div>
//       </FooterBottom>
//     </FooterContainer>
//   );
// };

// export default Footer;
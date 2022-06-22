import React from "react";
import { ContainerWrapper } from "../../data/style";
import { Row, Col } from "react-bootstrap";
import images from "../../data/images";
import { RiArrowRightUpLine } from "react-icons/ri";
import {
  FooterBLink,
  FooterBottom,
  FooterBottomContent,
  FooterCard,
  FooterCards,
  FooterContent,
  FooterItem,
  FooterLink,
  FooterList,
  FooterLogo,
  FooterLogoImg,
  FooterSpan,
  FooterTitle,
  FooterTxt,
  FooterWrapper,
} from "./footerStyled";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerWrapper>
        <FooterContent>
          <FooterCards as={Row}>
            <FooterCard as={Col} lg={4} md={7}>
              <FooterLogo>
                <FooterLogoImg src={images.logo} alt="logo" />
              </FooterLogo>
              <FooterTxt>
                Sign up for texts to be notified about our best offers on the
                perfect gifts.
              </FooterTxt>
            </FooterCard>
            <FooterCard as={Col} xs={12} lg={2} md={6} sm={6} >
              <FooterTitle>All products</FooterTitle>
              <FooterList>
                <FooterItem>
                  <FooterLink>Phones</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Watch</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Tablet</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>laptops</FooterLink>
                </FooterItem>
              </FooterList>
            </FooterCard>
            <FooterCard as={Col} xs={12} lg={2} md={6} sm={6} >
              <FooterTitle>Company</FooterTitle>
              <FooterList>
                <FooterItem>
                  <FooterLink>About</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Support</FooterLink>
                </FooterItem>
              </FooterList>
            </FooterCard>
            <FooterCard as={Col} xs={12} lg={2} md={6} sm={6} >
              <FooterTitle>Support</FooterTitle>
              <FooterList>
                <FooterItem>
                  <FooterLink>Style Guide</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Licensing</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Change Log</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Contact</FooterLink>
                </FooterItem>
              </FooterList>
            </FooterCard>
            <FooterCard as={Col} xs={12} lg={2} md={6} sm={6} >
              <FooterTitle>Follow Us</FooterTitle>
              <FooterList>
                <FooterItem>
                  <FooterLink>Instagram</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Facebook</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>LinkedIn</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink>Youtube</FooterLink>
                </FooterItem>
              </FooterList>
            </FooterCard>
          </FooterCards>
        </FooterContent>
        <FooterBottom>
        <FooterBottomContent>
        <FooterSpan>Made By:</FooterSpan>
        <FooterBLink href="https://t.me/xasanoffi" target='_blank'>Javohir <RiArrowRightUpLine/></FooterBLink>
        </FooterBottomContent>
        <FooterBottomContent>
        <FooterSpan>Powered By:</FooterSpan>
        <FooterBLink href="https://t.me/mosulmanskie" target='_blank'>Bandit <RiArrowRightUpLine/></FooterBLink>
        </FooterBottomContent>
        </FooterBottom>
      </ContainerWrapper>
    </FooterWrapper>
  );
};

export default Footer;

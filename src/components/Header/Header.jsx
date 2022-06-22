import React from "react";
import { ContainerWrapper } from "../../data/style";
import {
  HeaderBox,
  HeaderBoxs,
  HeaderImg,
  HeaderTitle,
  HeaderTxt,
  HeaderWrapper,
} from "./headerStyled";
import { Carousel, Col, Row } from "react-bootstrap";
import images from "../../data/images";

const Header = () => {
  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Carousel fade>
          <Carousel.Item>
            <HeaderBoxs as={Row}>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderTitle>The new phones are here take a look.</HeaderTitle>
                <HeaderTxt>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </HeaderTxt>
              </HeaderBox>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderImg
                  // src="https://im.bloha.ru/2021/08/maxresdefault-10.jpg"
                  src={images.header}
                  alt="First slide"
                />
              </HeaderBox>
            </HeaderBoxs>
          </Carousel.Item>
          <Carousel.Item>
            <HeaderBoxs as={Row}>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderTitle>The phones are Iphone 12</HeaderTitle>
                <HeaderTxt>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </HeaderTxt>
              </HeaderBox>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderImg
                  // src={images.header}
                  src="https://akket.com/wp-content/uploads/2021/02/Apple-iPhone-13-Smartfony-Flagmany.jpg"
                  alt="Second slide"
                />
              </HeaderBox>
            </HeaderBoxs>
          </Carousel.Item>
          <Carousel.Item>
            <HeaderBoxs as={Row}>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderTitle>Buy this and happy </HeaderTitle>
                <HeaderTxt>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                  turpis.
                </HeaderTxt>
              </HeaderBox>
              <HeaderBox as={Col} lg={6} md={6} sm={12}>
                <HeaderImg
                  // src={images.header}
                  src="https://media.wired.com/photos/5d803f5dc891950008ce3447/master/pass/iphone-11_6175-Edit.jpg"
                  alt="Third slide"
                />
              </HeaderBox>
            </HeaderBoxs>
          </Carousel.Item>
        </Carousel>
      </ContainerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

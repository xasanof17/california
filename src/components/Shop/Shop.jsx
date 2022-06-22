import React from "react";
import { Row, Col } from "react-bootstrap";
import { ContainerWrapper } from "../../data/style";
import {
  ShopCard,
  ShopContent,
  ShopContentLeft,
  ShopLeft,
  ShopLeftBox,
  ShopLeftBox2,
  ShopRight,
  ShopRightBox,
  ShopTop,
  ShopTopTitle,
  ShopTopTxt,
  ShopWrapper,
} from "./shopStyled";
import images from "../../data/images";

const Shop = () => {
  return (
    <ShopWrapper>
      <ContainerWrapper>
        <ShopTop>
          <ShopTopTitle>Shop our latest offers and categories</ShopTopTitle>
          <ShopTopTxt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </ShopTopTxt>
        </ShopTop>
        <ShopContent as={Row}>
          <ShopContentLeft as={Col} xs={12} lg={12} md={12} sm={12}>
            <ShopLeft>
              <img src={images.laptop} alt="" />
              <ShopLeftBox>
                <span>Laptops</span>
                <h3>True Laptop Solution</h3>
              </ShopLeftBox>
            </ShopLeft>
            <ShopLeft>
              <img src={images.watch} alt="" />
              <ShopLeftBox2>
              <span>Watch</span>
                <h3>Not just stylisht</h3>
              </ShopLeftBox2>
            </ShopLeft>
          </ShopContentLeft>
          <ShopRight as={Col} xs={12} lg={12} md={12} sm={12}>
            <ShopCard as={Col} lg={6} md={12} sm={12}>
              <img src={images.iphone} alt="" />
              <ShopRightBox>
                <span>Phones</span>
                <h3>Your day to day life</h3>
              </ShopRightBox>
            </ShopCard>
            <ShopCard as={Col} lg={6} md={12} sm={12}>
              <img src={images.ipad} alt="" />
              <ShopRightBox>
                <span>Tablet</span>
                <h3>Empower your work</h3>
              </ShopRightBox>
            </ShopCard>
          </ShopRight>
        </ShopContent>
      </ContainerWrapper>
    </ShopWrapper>
  );
};

export default Shop;

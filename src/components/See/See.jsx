import React from "react";
import { ContainerWrapper, Text, Title } from "../../data/style";
import { SeeBtn, SeeCard, SeeCardImg, SeeCardTitle, SeeCardTop, SeeContent, SeeSpan, SeeTitle, SeeTop, SeeTxt, SeeWrapper } from "./seeStyled";
import {Row, Col} from 'react-bootstrap';
import images from '../../data/images';
const See = () => {
  return (
    <SeeWrapper>
        <ContainerWrapper>
      <SeeTop>
        <SeeTitle as={Title}>See the best around here</SeeTitle>
        <SeeTxt as={Text}>
          Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
        </SeeTxt>
      </SeeTop>
      <SeeContent as={Row}>   
        <SeeCard as={Col} lg={3} md={5} sm={8}>
          <SeeCardTop>
            <SeeSpan>Smart light bulb pack</SeeSpan>
            <SeeCardTitle>Latest and gratest</SeeCardTitle>
            <SeeBtn>Explore</SeeBtn>
          </SeeCardTop>
          <SeeCardImg src={images.watches} />
        </SeeCard>
        <SeeCard as={Col} lg={3} md={5} sm={8}>
          <SeeCardTop>
            <SeeSpan>Smart light bulb pack</SeeSpan>
            <SeeCardTitle>Latest and gratest</SeeCardTitle>
            <SeeBtn>Explore</SeeBtn>
          </SeeCardTop>
          <SeeCardImg src={images.starsale} />
        </SeeCard>
        <SeeCard as={Col} lg={3} md={5} sm={8}>
          <SeeCardTop>
            <SeeSpan>Smart light bulb pack</SeeSpan>
            <SeeCardTitle>Latest and gratest</SeeCardTitle>
            <SeeBtn>Explore</SeeBtn>
          </SeeCardTop>
          <SeeCardImg src={images.notefon} />
        </SeeCard>
      </SeeContent>
      </ContainerWrapper>
    </SeeWrapper>
  );
};

export default See;

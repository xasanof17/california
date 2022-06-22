import React from "react";
import { Row,Col } from "react-bootstrap";
import images from "../../data/images";
import { ContainerWrapper, Text, Title } from "../../data/style";
import {
  SaveCard,
  SaveCardBody,
  SaveCardPrice,
  SaveCardTitle,
  SaveCardTop,
  SaveCardTxt,
  SaveContent,
  SaveImg,
  SaveTitle,
  SaveTop,
  SaveTxt,
  SaveWrapper,
} from "./saveStyled";

const Save = () => {
  return (
    <SaveWrapper>
      <ContainerWrapper>
        <SaveTop>
          <SaveTitle as={Title}>Save on our most selled items.</SaveTitle>
          <SaveTxt as={Text}>
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </SaveTxt>
        </SaveTop>
        <SaveContent>
          <Row>
          <SaveCard as={Col} lg='3' md='6' sm='6'>
            <SaveCardTop>
              <SaveImg src={images.macbookpro} />
            </SaveCardTop>
            <SaveCardBody>
              <SaveCardTitle>MacBook Pro 13</SaveCardTitle>
              <SaveCardTxt>
                Neque porro quisquam est qui dolorem ipsum quia
                dolor sit amet
              </SaveCardTxt>
              <SaveCardPrice className="prc">$ 1,200.00 USD</SaveCardPrice>
            </SaveCardBody>
          </SaveCard>
          <SaveCard as={Col} lg='3' md='6' sm='6'>
            <SaveCardTop>
              <SaveImg src={images.watch3} />
            </SaveCardTop>
            <SaveCardBody>
              <SaveCardTitle>Smart Galaxy Watch 3</SaveCardTitle>
              <SaveCardTxt>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </SaveCardTxt>
              <SaveCardPrice>$ 199.00 USD</SaveCardPrice>
            </SaveCardBody>
          </SaveCard>
          <SaveCard as={Col} lg='3' md='6' sm='6'>
            <SaveCardTop>
              <SaveImg src={images.macbookair} />
            </SaveCardTop>
            <SaveCardBody>
              <SaveCardTitle>MacBook Air M1</SaveCardTitle>
              <SaveCardTxt>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...  
              </SaveCardTxt>
              <SaveCardPrice>$ 1,009.00 USD</SaveCardPrice>
            </SaveCardBody>
          </SaveCard>
          <SaveCard as={Col} lg='3' md='6' sm='6'>
            <SaveCardTop>
              <SaveImg src={images.ipad2} />
            </SaveCardTop>
            <SaveCardBody>
              <SaveCardTitle>iPad</SaveCardTitle>
              <SaveCardTxt>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
              </SaveCardTxt>
              <SaveCardPrice>$ 610.00 USD</SaveCardPrice>
            </SaveCardBody>
          </SaveCard>
          </Row>
        </SaveContent>
      </ContainerWrapper>
    </SaveWrapper>
  );
};

export default Save;

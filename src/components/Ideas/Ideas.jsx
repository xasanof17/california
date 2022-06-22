import React from "react";
import { ContainerWrapper, Text, Title } from "../../data/style";
import { Idea, IdeaBtn, IdeaCard, IdeaCardTxt, IdeaContent, IdeaImg, IdeaLink, IdeaTitle, IdeaTop, IdeaTxt } from "./ideasStyled";
import {Row, Col} from 'react-bootstrap';
import images from '../../data/images';
import {RiArrowRightUpLine} from 'react-icons/ri';

const Ideas = () => {
  return (
    <Idea>
      <ContainerWrapper>
        <IdeaTop>
          <IdeaTitle as={Title}>Ideas have a place here</IdeaTitle>
          <IdeaTxt as={Text}>
            Our new Limited Edition Winter Design BESPOKE 4-Door Flex™
          </IdeaTxt>
        </IdeaTop>
        <IdeaContent as={Row}>
        <IdeaCard as={Col} lg={6} md={6} xs={12}><IdeaImg src={images.readbook} /></IdeaCard>
        <IdeaCard as={Col} lg={6} md={6} xs={12}>
        <IdeaCardTxt>
        We Make It Easy To Find The Great Design Talent, Easier...
        </IdeaCardTxt>
        <IdeaCardTxt>
        Road Design Handbook For The International Road...
        </IdeaCardTxt>
        <IdeaCardTxt>The Best Kept Secrets About Creative People</IdeaCardTxt>
        <IdeaCardTxt>We Make It Easy To Find The Great Design Talent, Easier...</IdeaCardTxt>
        </IdeaCard>
        </IdeaContent>
        <IdeaBtn><IdeaLink>See All <RiArrowRightUpLine/></IdeaLink></IdeaBtn>
      </ContainerWrapper>
    </Idea>
  );
};

export default Ideas;

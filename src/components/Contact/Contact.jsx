import React from "react";
import {
  ContactBox,
  ContactBtn,
  ContactForm,
  ContactImg,
  ContactInput,
  ContactTitle,
  ContactTxt,
  ContactWrapper,
} from "./contactStyled";
import { ContainerWrapper, Text, Title } from "../../data/style";
import images from "../../data/images";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContainerWrapper>
        <ContactBox>
          <ContactTitle as={Title}>Never miss a thing</ContactTitle>
          <ContactTxt as={Text}>
            Sign up for texts to be notified about our best offers on the
            perfect gifts.
          </ContactTxt>
          <ContactImg src={images.testimonial} alt="testimonial" />
          <ContactForm>
          <ContactInput type='email' placeholder="Your email"/>
          <ContactBtn type="submit">Sign up</ContactBtn>
          </ContactForm>
        </ContactBox>
      </ContainerWrapper>
    </ContactWrapper>
  );
};

export default Contact;

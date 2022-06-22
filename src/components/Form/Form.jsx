import React from "react";
import { ContainerWrapper, Title } from "../../data/style";
import {
  FormBtn,
  FormContent,
  FormInput,
  FormLink,
  FormList,
  FormTitle,
  FormWrapper,
} from "./formStyled";
import { FiSearch } from "react-icons/fi";
const Form = () => {
  return (
    <FormWrapper>
      <ContainerWrapper>
        <FormTitle as={Title}>Looking for anything else?</FormTitle>
        <FormContent>
          <FormBtn type="submit">
            <FiSearch />
          </FormBtn>
          <FormInput type="search" placeholder="Search keyword" />
        </FormContent>
        <FormList>
          <FormLink>iPhone</FormLink>
          <FormLink>Charger</FormLink>
          <FormLink>Gift</FormLink>
          <FormLink>Google Pixel 3</FormLink>
          <FormLink>Keyboard</FormLink>
          <FormLink>13 Pro Max</FormLink>
          <FormLink>iPhone 12</FormLink>
          <FormLink>Laptop</FormLink>
          <FormLink>Mobile</FormLink>
        </FormList>
      </ContainerWrapper>
    </FormWrapper>
  );
};

export default Form;

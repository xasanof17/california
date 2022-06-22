import styled from "styled-components";

export const FormWrapper = styled.section`
  margin-bottom: 70px;
`;

export const FormTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const FormContent = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  height: 60px;
  margin: 0px auto;
  position: relative;
  @media (max-width: 630px) {
    
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  background: var(--card);
  border: 1px solid #c5c5c5;
  border-radius: 100px;
  padding: 20px 20px 20px 65px;
  &::placeholder {
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    color: var(--black);
  }
`;

export const FormBtn = styled.button`
  position: absolute;
  top: 25%;
  left: 0;
  width: 30px;
  height: 30px;
  margin-left: 20px;
  background: transparent;
  svg {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export const FormList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 613px;
width: 100%;
margin: 25px auto;
`;

export const FormLink = styled.a`
margin: 3.5px;
padding: 12px 22px;
font-weight: 400;
font-size: 17px;
line-height: 17px;
color: var(--black);
background: var(--white);
border: 1px solid #C5C5C5;
border-radius: 200px;
cursor: pointer;
transition: .4s ease-in-out;
user-select: none;
&:hover{
    color: var(--black);
    background: var(--darkGreen);
}
`;
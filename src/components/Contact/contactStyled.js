import styled from "styled-components";

export const ContactWrapper = styled.section`
  margin-bottom: 20px;
`;

export const ContactBox = styled.div`
background: var(--darkGreen);
padding: 45px 0;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width: 425px) {
padding: 30px 10px;
}
`;

export const ContactTitle = styled.h2`

`;

export const ContactTxt = styled.p`

`;

export const ContactImg = styled.img`

`;

export const ContactForm = styled.form`
margin-top: 25px;
max-width: 400px;
width: 100%;
position: relative;
@media (max-width: 425px) {
max-width: 380px;
}
@media (max-width: 375px) {
max-width: 360px;
}
`;

export const ContactInput = styled.input`
width: 100%;
padding: 16px 0px 16px 30px;
border: 1px solid var(--black);
border-radius: 54px 20px 20px 54px ;
background: transparent;
&::placeholder{
  font-weight: 400;
font-size: 17px;
line-height: 17px;
color: var(--black);
}
`;

export const ContactBtn = styled.button`
position: absolute;
top: 0;
right: -5%;
padding: 17px 33px;
background: var(--black);
border-radius: 0px 200px 200px 0px;
color: var(--white);
@media (max-width: 425px) {
  right: 0;
  border-radius: 0 10px 10px 0;
}
@media (max-width: 375px) {}
`;
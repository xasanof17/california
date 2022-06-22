import styled from "styled-components";

export const SaveWrapper = styled.section`
margin-bottom: 50px;`;

export const SaveTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const SaveTitle = styled.h2`
  font-weight: 400;
  font-size: 42px;
  line-height: 52px;
  color: var(--black);
`;

export const SaveTxt = styled.h2`

`;

export const SaveContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SaveCard = styled.div`
   @media (max-width: 768px){
    margin: 15px 0;}
`;
export const SaveCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 247px;
  width: 100%;
  height: 214px;
`;

export const SaveImg = styled.img``;

export const SaveCardBody = styled.div`
  margin-top: 10px;
  .prc {
    display: inline-block;
    margin-top: 20px;
  }
`;
export const SaveCardTitle = styled.h3`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: var(--black);
  margin-bottom: unset;
  margin-bottom: 10px;
`;
export const SaveCardTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--gray);
  margin-bottom: unset;
  margin-bottom: 10px;
`;
export const SaveCardPrice = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: var(--black);

`;

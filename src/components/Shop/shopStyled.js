import styled from "styled-components";

export const ShopWrapper = styled.section`
  margin-bottom: 80px;
`;

export const ShopTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const ShopTopTitle = styled.h2`
  font-family: "Readex Pro";
  font-weight: 400;
  font-size: 42px;
  line-height: 52px;
  color: var(--black);
  margin-bottom: 10px;
`;

export const ShopTopTxt = styled.p`
  font-family: "Readex Pro";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--black);
  max-width: 628px;
  width: 100%;
  text-align: center;
`;

export const ShopContent = styled.div`
  @media (max-width: 425px) {
    img{
        width: 300px;
    }
  }
`;

export const ShopContentLeft = styled.div``;

export const ShopLeft = styled.div`
  width: 100%;
  background: var(--white);
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
  padding: 0px 40px;
  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
  }
  @media (max-width: 1024px) {
    &:nth-child(2) {
      margin-top: 30px;
    }
  }
  @media (max-width:425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    &:nth-child(2){
        flex-direction: column;
    }
  }
`;

export const ShopLeftBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: var(--black);
  }
  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: right;
    color: var(--black);
    max-width: 192px;
    width: 100%;
  }
  @media (max-width:425px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ShopLeftBox2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: var(--black);
  }
  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    text-align: right;
    color: var(--black);
  }
`;

export const ShopRight = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 1024px) {
    margin-top: 30px;
    gap: 5px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ShopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:nth-child(2) {
    flex-direction: column-reverse;
  }
  img {
    margin: 40px 0px;
  }
  background: var(--white);
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.25));
  @media (max-width: 768px) {
    margin: 30px 0;
    img{
        margin: 10px 0;
    }
  }
  @media (max-width: 425px) {
    align-items: flex-end;
    &:nth-child(2){
        align-items: flex-start;
    }
  }
`;
export const ShopRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 30px;
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: var(--black);
  }
  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: var(--black);
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 10px;
    width: 100%;
    align-items: flex-start;
    &:nth-of-type(2){
        align-items: flex-end;
    }
  }
`;

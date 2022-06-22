import styled from "styled-components";

export const HeaderWrapper = styled.section`
  margin: 30px 0 75px 0;
`;

export const HeaderImg = styled.img`
  width: 90%;
  min-height: 500px;
  @media (max-width: 767px) {
    width: 100%;
    height: 400px;
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
  }
`;
export const HeaderBoxs = styled.div``;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HeaderTitle = styled.h1`
  font-weight: 400;
  font-size: 58px;
  line-height: 70px;
  color: var(--black);
  @media (max-width: 767px) {
    font-size: 50px;
  }
  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
  }
`;
export const HeaderTxt = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
`;

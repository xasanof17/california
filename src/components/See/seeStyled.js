import styled from "styled-components";

export const SeeWrapper = styled.section`
margin-bottom: 75px;
`;

export const SeeTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const SeeTitle = styled.h2``;

export const SeeTxt = styled.p``;

export const SeeContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    align-items: center;
    gap: 20px;
    justify-content: center;
  }
`;

export const SeeCard = styled.div`
  padding: 40px 0px 12px 0;
  max-width: 410px;
  width: 100%;
  background: var(--card);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: 0px 5px;
    &:last-child {
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    margin: 15px 0;
    &:last-child {
      margin-top: 0;
    }
  }
`;

export const SeeCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SeeSpan = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: var(--black);
`;

export const SeeCardTitle = styled.h3`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  color: var(--black);
`;

export const SeeBtn = styled.button`
padding: 14px 63px;
border: 1px solid var(--black);
border-radius: 200px;
background: transparent;
margin-top: 30px;
transition: .5s ease;
&:hover{
  background: var(--darkGreen);
}
`;
export const SeeCardImg = styled.img`
margin-top: 50px;
`;
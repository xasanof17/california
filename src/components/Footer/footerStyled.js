import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--card);
`;

export const FooterContent = styled.div`
  padding: 45px 0px 60px 0px;
  border-bottom: 1px solid #ccc;
  @media (max-width: 500px) {
    padding: 30px 0;
  }
`;
export const FooterCards = styled.div``;
export const FooterCard = styled.div`
  @media (max-width: 768px) {
    margin: 15px 0;
  }
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`;

export const FooterLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const FooterLogoImg = styled.img`
  pointer-events: none;
`;

export const FooterTitle = styled.h3`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: var(--black);
`;

export const FooterTxt = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
  max-width: 304px;
  width: 100%;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const FooterItem = styled.li`
  margin: 7px 0;
`;

export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: var(--black);
  cursor: pointer;
  text-transform: capitalize;
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterBottomContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    &:last-child{
        margin-top: 15px;
    }
  }
`;

export const FooterSpan = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: var(--black);
  margin-right: 10px;
  text-transform: capitalize;
`;

export const FooterBLink = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--black);
  cursor: pointer;
  svg {
    font-size: 20px;
  }
`;

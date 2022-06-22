import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  padding: 30px 0;
  background: var(--white);
  backdrop-filter: blur(50px);
  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
  pointer-events: none;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0px 15px;
`;

export const NavLink = styled.a`
  font-family: "Iner", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: var(--black);
  cursor: pointer;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavIcon = styled.button`
  background: transparent;
  font-size: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:nth-child(2) {
    margin-left: 30px;
  }
  svg {
    pointer-events: none;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// Small Screen

export const NavSmallScreen = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SmallBtn = styled.button`
  cursor: pointer;
  background: transparent;
  width: 30px;
  height: 30px;
  svg {
    width: 100%;
    pointer-events: none;
  }
  &.close {
    position: absolute;
    top: 20px;
    right: 20px;
    @media (max-width: 425px) {
      right: 15px;
    }
  }
`;

export const NavSmallListOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: var(--darkGreen);
  backdrop-filter: blur(50px);
  display: none;
  transition: 0.6s ease-in-out;
  scroll-behavior: smooth;
  &.active {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const NavSmallList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const NavSmallLink = styled.a`
  font-size: 1.5rem;
  color: var(--black);
  margin: 15px 0;
  text-transform: capitalize;
`;

import React, { useState } from "react";
import images from "../../data/images";
import { ContainerWrapper } from "../../data/style";
import {
  LogoImg,
  NavContent,
  NavIcon,
  NavIcons,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
  NavSmallLink,
  NavSmallList,
  NavSmallListOverlay,
  NavSmallScreen,
  NavWrapper,
  SmallBtn,
} from "./navbarStyled";

import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const Show = ()=>{
    setTimeout(() => {
      
      setToggle(prevState => !prevState);
    }, 400);
  }

  return (
    <NavWrapper>
      <ContainerWrapper>
        <NavContent>
          <NavLogo>
            <LogoImg src={images.logo} alt="logo" />
          </NavLogo>
          <NavList>
            <NavItem>
              <NavLink>all products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Support</NavLink>
            </NavItem>
          </NavList>
          <NavIcons>
            <NavIcon>
              <FiSearch />
            </NavIcon>
            <NavIcon>
              <FiShoppingCart />
            </NavIcon>
          </NavIcons>
          <NavSmallScreen>
            <SmallBtn onClick={Show}>
              <FiMenu fontSize={27} />
            </SmallBtn>

            <NavSmallListOverlay className={toggle ? 'active' : ''}>
              <SmallBtn onClick={Show} className='close'>
                <MdOutlineClose fontSize={27} />
              </SmallBtn>
                <NavSmallList>
                  <NavSmallLink>all products</NavSmallLink>
                  <NavSmallLink>solutions</NavSmallLink>
                  <NavSmallLink>about</NavSmallLink>
                  <NavSmallLink>support</NavSmallLink>
                </NavSmallList>
            </NavSmallListOverlay>
          </NavSmallScreen>
        </NavContent>
      </ContainerWrapper>
    </NavWrapper>
  );
};

export default Navbar;

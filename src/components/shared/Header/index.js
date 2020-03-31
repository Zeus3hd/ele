import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderRight,
  HeaderLeft,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  HeaderLeftLinksList,
  HeaderLeftLinkListItem,
  HeaderLeftLink,
  MenuButton,
  MenuIcon,
  NavWrapper,
  NavLinks,
  NavListItem,
  NavListLink
} from "./index.style";
import headerbg from "../../../img/headerbg.jpg";
import duaImage from "../../../img/headermulti.png";
import flowersImage from "../../../img/headerflower.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";
const Header = () => {
  const [toggleNav, setToggleNav] = useState(true);
  const navShow = useSpring({
    right: toggleNav ? "-100%" : "0%",
    from: { right: toggleNav ? "0%" : "-100%" },
    config: config.gentle
  });

  return (
    <HeaderContainer background={headerbg}>
      <HeaderLeft background={flowersImage}>
        <HeaderLeftTitleContainer>
          <HeaderLeftTitleElegant>ELEGANT</HeaderLeftTitleElegant>
          <HeaderLeftTitleLady>LADY</HeaderLeftTitleLady>
        </HeaderLeftTitleContainer>
        <HeaderLeftLinksList>
          <HeaderLeftLinkListItem>
            <HeaderLeftLink>Dresses</HeaderLeftLink>
          </HeaderLeftLinkListItem>
          <HeaderLeftLinkListItem>
            <HeaderLeftLink>Coats</HeaderLeftLink>
          </HeaderLeftLinkListItem>
          <HeaderLeftLinkListItem>
            <HeaderLeftLink>Abaya</HeaderLeftLink>
          </HeaderLeftLinkListItem>
        </HeaderLeftLinksList>
      </HeaderLeft>
      <HeaderRight background={duaImage}>
        <MenuButton onClick={() => setToggleNav(!toggleNav)}>
          <MenuIcon icon={faBars} />
        </MenuButton>
        <NavWrapper style={navShow}>
          <NavLinks>
            <NavListItem>
              <NavListLink>Home Page</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink>Dresses Collection</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink>Coats Collection</NavListLink>
            </NavListItem>
            <NavListItem>
              <NavListLink>Skirts Collection</NavListLink>
            </NavListItem>
          </NavLinks>
        </NavWrapper>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

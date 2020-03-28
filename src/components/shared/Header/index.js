import React from "react";
import {
  HeaderContainer,
  HeaderRight,
  HeaderLeft,
  HeaderRightImg,
  MenuIcon,
  MenuButton,
  HeaderLeftImg,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  HeaderLeftLinksList,
  HeaderLeftLinkListItem,
  HeaderLeftLink
} from "./index.style";
import headerbg from "../../../img/headerbg.jpg";
import duaImage from "../../../img/headermulti.png";
import flowersImage from "../../../img/headerflower.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useSpring, config } from "react-spring";
const Header = () => {
  return (
    <HeaderContainer background={headerbg}>
      <HeaderLeft>
        <HeaderLeftImg src={flowersImage} />
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
            <HeaderLeftLink>Skirts</HeaderLeftLink>
          </HeaderLeftLinkListItem>
        </HeaderLeftLinksList>
      </HeaderLeft>
      <HeaderRight>
        <HeaderRightImg src={duaImage} />
        <MenuButton>
          <MenuIcon icon={faBars} />
        </MenuButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

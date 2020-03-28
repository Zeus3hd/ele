import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated } from "react-spring";
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535"
};
const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`;
const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const HeaderRightImg = styled.img`
  height: 100%;
  mix-blend-mode: multiply;
`;

const MenuButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 999;
`;
const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${colors.black};
`;
const HeaderLeft = styled.div`
  flex: 1;
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
`;
const HeaderLeftImg = styled.img`
  width: 60%;
  min-width: 500px;
  mix-blend-mode: multiply;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
`;
const HeaderLeftTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  z-index: 2;
`;
const HeaderLeftTitleElegant = styled.p`
  font-size: 4rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  border-bottom: 10px solid rgba(53, 53, 53, 1);
`;
const HeaderLeftTitleLady = styled.p`
  font-size: 4rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  align-self: flex-end;
  color: ${colors.blue};
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;
const HeaderLeftLinksList = styled.ul`
  position: absolute;
  bottom: 2rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const HeaderLeftLinkListItem = styled.li`
  margin: 1rem;
  font-weight: bold;
  &:before {
    content: "- ";
    color: ${colors.black};
  }
`;
const HeaderLeftLink = styled.a`
  color: ${colors.black};
  cursor: pointer;
  border-bottom: 1px solid rgba(187, 223, 219, 0);
  transition: 0.4s;
  &:hover {
    border-bottom: 1px solid rgba(187, 223, 219, 1);
    color: ${colors.blue};
    font-size: 1.5rem;
  }
`;
const NavWrapper = styled(animated.nav)`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
`;
const NavLinks = styled.ul`
  background: ${colors.blue + "aa"};
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const NavListItem = styled.li`
  cursor: pointer;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  transition: 0.4s;
  &:hover {
    border-bottom: 3px solid ${colors.pink};
  }
`;
const NavListLink = styled.a`
  color: ${colors.black};
  font-size: 2rem;
  font-weight: bold;
`;

export {
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
  HeaderLeftLink,
  NavWrapper,
  NavLinks,
  NavListItem,
  NavListLink
};

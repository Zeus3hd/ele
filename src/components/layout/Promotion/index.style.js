import styled from "styled-components";
import { animated } from "react-spring";
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535"
};
const Wrapper = styled.section`
  height: 100vh;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
const HeaderLeftTitleContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
  margin: 5vw;
  box-sizing: border-box;
`;
const HeaderLeftTitleElegant = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  border-bottom: 10px solid rgba(53, 53, 53, 1);
`;
const HeaderLeftTitleLady = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: bolder;
  letter-spacing: 0.8rem;
  align-self: flex-end;
  color: ${colors.blue};
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`;
const PromoPinkContainer = styled(animated.div)`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center top;
  position: absolute;
  width: 50%;
  height: 400px;
  top: 50%;
  left: 50%;
`;
const PromoBlueContainer = styled(animated.div)`
  background: ${colors.blue} url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center top;
  position: absolute;
  width: 30%;
  height: 50%;
  bottom: 0%;
  right: 0;
`;
const Circle = styled(animated.div)`
  width: 50vh;
  height: 50vh;
  border-radius: 50vh;
  border: 3rem solid ${colors.pink};
  position: absolute;
  mix-blend-mode: darken;
  z-index: -2;
  animation: anim 50s infinite;

  @keyframes anim {
    0% {
      top: 0;
      left: 0;
    }
    33% {
      top: 20%;
      left: 50%;
    }
    77% {
      top: 40%;
      left: 70%;
      border: 3rem solid ${colors.blue};
    }
    100% {
      top: 0;
      left: 0;
    }
  }
`;
export {
  Wrapper,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  PromoPinkContainer,
  PromoBlueContainer,
  Circle
};

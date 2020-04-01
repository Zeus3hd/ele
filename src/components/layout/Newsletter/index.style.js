import styled from "styled-components";
const colors = {
  pink: "#FABEBD",
  blue: "#BBDFDB",
  black: "#353535"
};
const Wrapper = styled.div`
  display: flex;
`;
const CardsContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  min-height: 450px;
  background: ${({ color }) => color} url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center top;
  background-blend-mode: multiply;
`;
const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
`;
const TextParagraph = styled.p`
  width: 250px;
  font-size: 5rem;
  font-weight: bolder;
  color: ${colors.black};
  text-align: center;
  margin: 0;
  text-shadow: 0px 0px 2px ${colors.black};
  transform: translateX(-50%);
  mix-blend-mode: soft-light;
`;
const ActionButton = styled.button`
  font-size: 5rem;
  background: transparent;
  border: none;
  color: ${colors.black};
  cursor: pointer;
`;
const TextBorder = styled.div`
  border: 3rem solid ${colors.black + "88"};
  transform: translateX(50%);
  mix-blend-mode: hard-light;
`;
export {
  Wrapper,
  Card,
  CardsContainer,
  TextContainer,
  TextParagraph,
  ActionButton,
  TextBorder
};

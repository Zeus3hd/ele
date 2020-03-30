import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  HeaderLeftTitleContainer,
  HeaderLeftTitleElegant,
  HeaderLeftTitleLady,
  PromoPinkContainer,
  PromoBlueContainer,
  Circle
} from "./index.style";
import duaImage from "../../../img/promo.png";
import promoPink from "../../../img/promo-pink.jpg";
import promoBlue from "../../../img/promo-blue.png";
import { useSpring, config } from "react-spring";
const Promotion = () => {
  const [isVisible, setVisible] = useState(false);
  const animatePromoPink = useSpring({
    to: {
      opacity: isVisible ? "1" : "0",
      transform: isVisible ? "translate(-50%,-50%)" : "translate(-10%,50%)"
    },
    from: { opacity: isVisible ? "1" : "0" },
    config: config.wobbly
  });
  const animatePromoBlue = useSpring({
    to: {
      opacity: isVisible ? "1" : "0",
      transform: isVisible ? "translate(-30%,-10%)" : "translate(-10%,50%)"
    },
    from: { opacity: isVisible ? "1" : "0" },
    config: config.molasses
  });

  useEffect(() => {
    let observer = new IntersectionObserver(el => {
      el[0].isIntersecting ? setVisible(true) : setVisible(false);
    });
    observer.observe(pinkRef.current);
  }, []);
  const pinkRef = useRef();
  return (
    <Wrapper bg={duaImage}>
      <HeaderLeftTitleContainer>
        <HeaderLeftTitleElegant>ELEGANT</HeaderLeftTitleElegant>
        <HeaderLeftTitleLady>LADY</HeaderLeftTitleLady>
      </HeaderLeftTitleContainer>
      <Circle />
      <PromoPinkContainer
        style={animatePromoPink}
        ref={pinkRef}
        bg={promoPink}
      />
      <PromoBlueContainer style={animatePromoBlue} bg={promoBlue} />
    </Wrapper>
  );
};

export default Promotion;

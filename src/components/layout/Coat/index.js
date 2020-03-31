import React, { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  BigImageContainer,
  CarouselWrapper,
  Circle,
  TitleContainer,
  ChiqueText,
  DressesText,
  SlidesContainer,
  SingleSlideSmall,
  SlidesInnerContainer,
  ArrowLeft,
  ArrowLeftIcon
} from "./index.style";
import imageOne from "../../../img/img5.jpg";
import imageTwo from "../../../img/img6.jpg";
import imageThree from "../../../img/img7.jpg";
import imageFour from "../../../img/img8.jpg";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";

const items = [imageOne, imageTwo, imageThree, imageFour];
const Coat = () => {
  const [translateBy, setTranslateBy] = useState(0);
  const [numOfChildren, setNumOfChildren] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const animateSlides = useSpring({
    transform: `translateX(-${translateBy}px)`,
    config: config.gentle
  });
  let slideWrap = useRef(null);

  useEffect(() => {
    setNumOfChildren(slideWrap.current.childNodes.length - 1);
  }, []);
  const handleCarouselSlide = () => {
    console.log(translateBy);
    console.log(numOfChildren * 300 - 300);
    if (Math.abs(translateBy) <= numOfChildren * 300 - 300 - 300) {
      setTranslateBy(translateBy - 300);
      setSlideCount(slideCount + 1);
    } else {
      setTranslateBy(0);
      setSlideCount(0);
    }
  };
  return (
    <Wrapper>
      <CarouselWrapper>
        <Circle />
        <TitleContainer>
          <ChiqueText>STYLISH</ChiqueText>
          <DressesText>COATS</DressesText>
        </TitleContainer>
        <SlidesContainer>
          <SlidesInnerContainer ref={slideWrap}>
            {items.map((item, i) => {
              return (
                <SingleSlideSmall key={i} img={item} style={animateSlides} />
              );
            })}
            <ArrowLeft onClick={handleCarouselSlide}>
              <ArrowLeftIcon icon={faCaretLeft} />
            </ArrowLeft>
          </SlidesInnerContainer>
        </SlidesContainer>
      </CarouselWrapper>
      <BigImageContainer img={items[slideCount]}></BigImageContainer>
    </Wrapper>
  );
};

export default Coat;

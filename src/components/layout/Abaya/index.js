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
import imageOne from "../../../img/img1.jpg";
import imageTwo from "../../../img/img2.jpg";
import imageThree from "../../../img/img3.jpg";
import imageFour from "../../../img/img4.jpg";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";

const items = [imageOne, imageTwo, imageThree, imageFour];
const Abaya = () => {
  const [translateBy, setTranslateBy] = useState(0);
  const [numOfChildren, setNumOfChildren] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isVisible, setVisible] = useState(false);

  const animateSlides = useSpring({
    transform: `translateX(-${translateBy}px)`,
    config: config.gentle
  });
  let slideWrap = useRef(null);
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
  useEffect(() => {
    setNumOfChildren(slideWrap.current.childNodes.length - 1);
    let observer = new IntersectionObserver(el => {
      el[0].isIntersecting ? setVisible(true) : setVisible(false);
    });
    observer.observe(containerRef.current);
    setTimeout(() => handleCarouselSlide(), 3000);
  }, [handleCarouselSlide]);
  const containerRef = useRef();
  const animateBig = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(100%)",
    config: config.gentle
  });
  const animateSmall = useSpring({
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: config.gentle
  });

  return (
    <Wrapper ref={containerRef}>
      <CarouselWrapper style={animateSmall}>
        <Circle />
        <TitleContainer>
          <ChiqueText>Chique</ChiqueText>
          <DressesText>Dresses</DressesText>
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
      <BigImageContainer
        img={items[slideCount]}
        style={animateBig}
      ></BigImageContainer>
    </Wrapper>
  );
};

export default Skirt;

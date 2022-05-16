
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import {Marginer}  from "../../components/marginer";
import { Reviewcard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import Assets from "../../assets/index.js"
import "pure-react-carousel/dist/react-carousel.es.css";


const ReviewsContainer = styled(Element)`
  height: 700px;
 display: flex;
  flex-direction: column;
  align-items: center;
  
  
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 95%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }

  
  
 
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #cc9898;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #3a3737;
  }
`;

export function Review(props) {
 
  return (
    <ReviewsContainer>
          <Marginer direction="vertical" margin="1em" />
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="2em" />
      <StyledCarouselProvider
        naturalSlideWidth={170}
        naturalSlideHeight={ 190}
        totalSlides={4}
        visibleSlides={ 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
            <Reviewcard
              reviewText=" I very much enjoyed working with yegnasera and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Biruk ashagri"
              userImgUrl={Assets.per1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <Reviewcard
              reviewText=" I very much enjoyed working with yegnasera and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="selomon kahan"
              userImgUrl={Assets.per2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <Reviewcard
              reviewText=" I very much enjoyed working with yegnasera and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="semira kebede"
              userImgUrl={Assets.per3}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <Reviewcard
              reviewText=" I very much enjoyed working with yegnasera and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="bulcha gebeyehu"
              userImgUrl={Assets.per4}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
export default Review;
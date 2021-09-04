import React from "react";
import {
  HeroWrapper,
  Introduction,
  Job,
  Name,
  Quote,
  Quoter,
} from "./Hero.Styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <Introduction>
        <Name>Wafa Saefulhaq</Name>
        <Job>Front-end developer</Job>
        <Quote>
          Choose a job you love, and you will never have to work a day in your
          life
        </Quote>
        <Quoter>Confusius</Quoter>
      </Introduction>
    </HeroWrapper>
  );
};

export default Hero;

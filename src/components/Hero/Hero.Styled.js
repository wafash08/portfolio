import styled from "styled-components";

import ComputerRoom from "../../assets/images/computer-room.jpg";

export const HeroWrapper = styled.div`
  background-image: url(${ComputerRoom});
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
  mix-blend-mode: darken;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #fff;
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
`;
export const Job = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
export const Quote = styled.q`
  font-style: italic;
  font-weight: 200;
`;
export const Quoter = styled.p`
  font-style: italic;
  font-weight: 200;
  position: relative;

  &::before {
    content: "";
    top: 50%;
    transform: translateX(-50%);
    left: -10px;
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: #fff;
  }
`;

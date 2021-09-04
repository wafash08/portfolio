import styled from "styled-components";

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    flex-direction: row;
    margin: 2rem 1rem;
  }
`;

export const Heading = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 1rem;
  }
`;
export const Content = styled.div`
  position: relative;

  @media (min-width: 1100px) {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -1rem;
      left: 0;
      background-color: purple;
    }
  }
`;

export const SmallTitle = styled.small`
  text-transform: uppercase;
  color: #333;
  margin-top: 1rem;
  letter-spacing: 1.2px;
  font-size: 12px;
`;
export const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
export const Paragraph = styled.p`
  font-weight: 300;
  margin-bottom: 1rem;
`;

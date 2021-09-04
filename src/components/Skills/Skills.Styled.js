import styled from "styled-components";

export const Skill = styled.div`
  width: 40%;
  text-align: center;
  margin: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  padding: 1.2em;
  border-radius: 4px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2),
      -1px -1px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const Icon = styled.p`
  color: purple;
`;
export const Heading4 = styled.h4`
  margin: 0.5rem 0;
`;

export const SmallParagraph = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

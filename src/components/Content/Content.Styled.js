import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkedCard = styled(Link)`
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  padding: 1.5rem 1rem;
  border-radius: 5px;
  color: #333;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0;
  width: 100%;
  max-width: 700px;
  &:hover {
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;
export const ContentDate = styled.small`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #333;
`;
export const Title = styled.h2`
  text-transform: capitalize;
  color: #333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
`;
export const BlogContent = styled.p`
  font-weight: 300;
`;

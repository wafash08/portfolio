import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #f6f5f7;
  height: 100%;
  width: 100%;

  @media (min-width: 500px) {
    padding: 2rem;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 700px;
  margin-bottom: 1rem;
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 500;
`;
export const Tags = styled(Link)`
  text-transform: uppercase;
  padding: 0.3em 0.6em;
  color: white;
  background-color: purple;
  border-radius: 3px;
  border: 1px solid purple;
  transition: all 0.3s ease-in-out;
  font-size: 12px;

  &:hover {
    color: purple;
    background-color: white;
  }
`;

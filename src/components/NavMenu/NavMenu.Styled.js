import { Link } from "react-router-dom";
import styled from "styled-components";
import livingRoom from "../../assets/images/living-room.jpg";

export const Nav = styled.nav`
  display: none;

  @media (min-width: 1100px) {
    padding: 2rem;
    width: 100%;
    background-color: #1f1f1f;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.button`
  display: none;
  background-image: url(${livingRoom});
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid #fff;
  cursor: pointer;
  @media (min-width: 1100px) {
    display: block;
  }
`;
export const Name = styled.p`
  color: #fff;
  text-transform: uppercase;
  margin-top: 1rem;
`;
export const NavList = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  padding: 0.5em 1em;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out;
  color: #fff;
  text-transform: uppercase;

  &:hover {
    background-color: #555;
  }
`;

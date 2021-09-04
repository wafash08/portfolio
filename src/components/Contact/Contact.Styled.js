import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  background-color: #f6f5f7;
`;
export const Header = styled.div`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const Small = styled.small`
  font-size: 12px;
`;
export const Title = styled.h2`
  font-weight: 600;
  @media (min-width: 750px) {
    font-size: 32px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    margin: auto;
    width: 75%;
  }
`;
export const Sender = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
export const Name = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  color: #000;
  font-size: 16px;
  padding: 0.8em;
  margin-bottom: 1rem;
  @media (min-width: 750px) {
    margin-right: 1rem;
  }
`;
export const Email = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  color: #000;
  font-size: 16px;
  padding: 0.8em;
  margin-bottom: 1rem;
`;
export const Subject = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  color: #000;
  font-size: 16px;
  padding: 0.8em;
  margin-bottom: 1rem;
`;
export const Message = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  color: #000;
  font-size: 16px;
  padding: 0.8em;
  margin-bottom: 1rem;
`;
export const Send = styled.button`
  width: 100%;
  color: #fff;
  border: 1px solid purple;
  background-color: purple;
  text-transform: uppercase;
  padding: 0.5em;
  border-radius: 1px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: purple;
    background-color: #fff;
  }

  @media (min-width: 750px) {
    width: 15%;
  }
`;

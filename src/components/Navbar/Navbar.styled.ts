import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #282c34;
  color: white;
  border-radius: 5px;
  margin-top: 30px;
  font-size: 20px;
  font-family: sans-serif;
  padding: 10px;
  font-weight: bold;
`;

const Route = styled.span`
  color: white;
  margin: 5px;
  transition: transform 0.2s;
  :hover {
    color: #61dafb;
    transform: scale(1.5);
  }
`;

export const StyledNav = {
  Nav,
  Route,
};

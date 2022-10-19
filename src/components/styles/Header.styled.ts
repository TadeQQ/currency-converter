import styled from "styled-components";
import { keyframes } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #282c34;
  display: flex;
  justify-content: space-around;
  color: white;
  border-radius: 40px;
  margin-top: 10px;
  padding-right: 20px;
  font-family: sans-serif;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLogo = styled.img`
  height: 100px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
  :hover {
    animation: none;
  }
`;

export const StyledH2 = styled.h2`
  margin-top: 35px;
`;

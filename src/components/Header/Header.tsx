import React from "react";
import logo from "./logo.svg";
import { StyledHeader, StyledLogo, StyledH2 } from "../styles/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledH2>Welcome to your favorite currency converter</StyledH2>
    </StyledHeader>
  );
};

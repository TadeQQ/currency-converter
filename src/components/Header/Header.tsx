import React from "react";
import logo from "./logo.svg";
import { StyledHeader, StyledLogo } from "../styles/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <h1>Welcome to your favorite currency converter</h1>
    </StyledHeader>
  );
};

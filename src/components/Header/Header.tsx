import React from "react";
import logo from "./logo.svg";
import { StyledHeader, Logo, H2 } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="logo" />
      <H2>Welcome to your favorite currency converter</H2>
    </StyledHeader>
  );
};

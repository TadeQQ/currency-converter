import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./Navbar.styled";
import { Routes } from "../../routes";

export const Navbar = () => {
  return (
    <StyledNav.Nav>
      <Link to={Routes.CONVERTER} style={{ textDecoration: "none" }}>
        <StyledNav.Route>Converter</StyledNav.Route>
      </Link>
      |
      <Link to={Routes.HISTORY} style={{ textDecoration: "none" }}>
        <StyledNav.Route>Converts history</StyledNav.Route>
      </Link>
    </StyledNav.Nav>
  );
};

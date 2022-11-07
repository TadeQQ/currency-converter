import React from "react";
import { Header } from "../components/Header/Header";
import { Container } from "../components/styles/App.styled";
import { Converter } from "../components/Converter/Converter";
import { Outlet, Link } from "react-router-dom";
import { Routes } from "./Routes";
export function App() {
  return (
    <Container>
      <Header />
      <Link to={Routes.HISTORY}>Historical page</Link>
      <Outlet />
      {/* <Converter /> */}
    </Container>
  );
}

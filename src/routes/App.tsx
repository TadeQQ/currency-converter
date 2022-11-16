import React from "react";
import { Header } from "../components/Header/Header";
import { Container } from "../components/styles/App.styled";
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
export function App() {
  return (
    <Container>
      <Header />
      <Navbar />
      <Outlet />
    </Container>
  );
}

import React from "react";
import { Header } from "./components/Header/Header";
import { Container } from "./App.styled";
import { Converter } from "./components/Converter/Converter";
function App() {
  return (
    <Container>
      <Header />
      <Converter />
    </Container>
  );
}

export default App;

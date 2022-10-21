import styled from "styled-components";

export const StyledConverter = styled.div`
  background-color: #282c34;
  color: white;
  border-radius: 20px;
  margin-top: 30px;
  font-family: sans-serif;
`;

export const Form = styled.form`
  display: flex;
  padding: 10px 5px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Input = styled.input`
  margin-top: 5px;
  font-size: 16px;
`;

export const Swap = styled.button`
  border-radius: 70%;
  border: none;
  background-color: #61dafb;
  :hover {
    background-color: gray;
  }
`;

export const Convert = styled.button`
  border-radius: 30%;
  border: none;
  background-color: #61dafb;
  :hover {
    background-color: gray;
  }
`;

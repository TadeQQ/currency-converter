import styled from "styled-components";

const Historical = styled.div`
  background-color: #282c34;
  color: white;
  border-radius: 10px;
  margin-top: 30px;
  font-family: sans-serif;
  padding: 1px 20px;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3``;

const ListElement = styled.li`
  margin: 10px 0px;
`;
const Form = styled.form`
  display: flex;
  padding: 10px 5px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`;

const Input = styled.input`
  margin-top: 5px;
  font-size: 16px;
`;

const Convert = styled.button`
  border-radius: 30%;
  border: none;
  background-color: #61dafb;
  :hover {
    background-color: gray;
  }
`;

export const HistoricalStyles = {
  Historical,
  Title,
  ListElement,
};

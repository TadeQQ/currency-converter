import React from "react";
import {
  StyledConverter,
  Form,
  Div,
  Input,
  Swap,
  Convert,
} from "../styles/Converter.styled";
import { CurrenciesServices } from "../../services/CurrenciesServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// handleFetchCurriencies();
export const Converter = () => {
  // const queryClient = useQueryClient();
  // const query = useQuery(["currencies"], CurrenciesServices.fetchAllCurrencies);
  // console.log(query.data)
  // const queryArray = Object.keys(query.data);
  // const handleFetchCurriencies = async () => {
  //   const data = CurrenciesServices.fetchAllCurrencies();
  //   const a = await data;
  //   console.log(a);
  // };
  return (
    <StyledConverter>
      <Form action="">
        <Div className="amount">
          {" "}
          Amount <Input type="number" placeholder="1.00" />
        </Div>
        <Div className="from">
          From{" "}
          <select>
            <option></option>
          </select>
        </Div>
        <div></div>
        <Swap className="switchcurriencies"> {"swap"} </Swap>
        <Div className="to">
          {" "}
          To{" "}
          <select>
            <option value="USD">USD</option>
          </select>
        </Div>
        <Convert className="convert Button">Convert</Convert>
      </Form>
    </StyledConverter>
  );
};

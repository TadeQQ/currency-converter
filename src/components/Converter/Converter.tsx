import React from "react";
import {
  StyledConverter,
  Form,
  Div,
  Input,
  Convert,
} from "../styles/Converter.styled";
import { SelectCurrency } from "../SelectCurrency/SelectCurrency";
import { useFetchCurrencies } from "../../Hooks/useFetchCurrencies";
import { useConvertCurrency } from "../../Hooks/useConvertCurrency";
import { useForm } from "react-hook-form";

export const Converter = () => {
  const { currencies, isLoading } = useFetchCurrencies({});
  const { form, query } = useConvertCurrency();

  return (
    <StyledConverter>
      <Form onSubmit={() => console.log(query.data?.query)}>
        <Div>
          <div>Amount</div>{" "}
          <Input
            type="number"
            placeholder="1.00"
            {...form.register("amount")}
          />
        </Div>
        <Div>
          <div>From</div>
          <SelectCurrency data={currencies} {...form.register("from")} />
        </Div>
        <Div>
          <div>To</div>
          <SelectCurrency data={currencies} {...form.register("to")} />
        </Div>
        <Convert
          type="submit"
          onClick={() => form.getValues(["amount", "from", "to"])}
        >
          Convert
        </Convert>
      </Form>
      <div></div>
    </StyledConverter>
  );
};

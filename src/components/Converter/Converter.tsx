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
import { useConvertCurrency } from "../../Hooks/convert/useConvertCurrency";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Converter = () => {
  const navigate = useNavigate();
  const { currencies, isLoading } = useFetchCurrencies({});
  const {
    form: {
      register,
      handleConvert,
      control,
      formState: { errors },
    },
    query,
  } = useConvertCurrency({
    onError: () => console.log(errors),
    onSuccess: (data) => {
      navigate("/history");
    },
  });

  return (
    <StyledConverter>
      <Form onSubmit={handleConvert}>
        <Div>
          <div>Amount</div>
          <Input
            type="number"
            placeholder="amount"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount?.message}
        </Div>
        <Div>
          <label htmlFor="from">From</label>
          <Controller
            control={control}
            name="from"
            render={({ field }) => (
              <SelectCurrency
                data={currencies}
                onValueChange={(value) => field.onChange(value)}
                {...field}
              />
            )}
          />

          {errors.from?.message}
        </Div>
        <Div>
          <label>To</label>
          <Controller
            control={control}
            name="to"
            render={({ field }) => (
              <SelectCurrency
                data={currencies}
                onValueChange={(value) => field.onChange(value)}
                {...field}
              />
            )}
          />
          {errors.to?.message}
        </Div>
        <Convert type="submit">Convert</Convert>
      </Form>
      <div></div>
    </StyledConverter>
  );
};

// DATA= CURRENCIES SPRAWDZIC

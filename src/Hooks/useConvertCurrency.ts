import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CurrenciesServices } from "../services/CurrenciesServices";

export const useConvertCurrency = () => {
  const { watch, handleSubmit, ...restForm } = useForm();
  const { from, to, amount } = watch();

  const { refetch, ...restQuery } = useQuery(
    ["convert", from, to, amount],
    (context) => CurrenciesServices.convertCurrencies({ from, to, amount }),
    {
      enabled: false,
    }
  );

  const handleConvert = handleSubmit((data) => {
    refetch();
  });
  const handleError = (errors: Error) => console.error(errors);

  return {
    form: { handleConvert, handleError, ...restForm },
    query: { ...restQuery },
  };
};

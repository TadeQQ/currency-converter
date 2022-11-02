import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CurrenciesServices } from "../services/CurrenciesServices";
import { format } from "path";

//format,to,amount

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

  return { form: { handleConvert, ...restForm }, query: { ...restQuery } };
};

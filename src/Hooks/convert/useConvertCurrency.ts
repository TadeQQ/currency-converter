import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CurrenciesServices } from "../../services/CurrenciesServices";
import { ResultHandler } from "../../types/ResultHandler";
import { useConvertCurrencyForm } from "./useConvertCurrencyForm";
import { useState } from "react";

export const useConvertCurrency = ({ onError, onSuccess }: ResultHandler) => {
  const [isPending, setIsPending] = useState(false);

  const { watch, handleSubmit, ...restForm } = useConvertCurrencyForm();
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

  return {
    form: { handleConvert, ...restForm },
    query: { ...restQuery },
  };
};

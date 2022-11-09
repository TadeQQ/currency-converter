import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  CurrenciesServices,
  ConvertCurrenciesResponse,
} from "../../services/CurrenciesServices";
import { ResultHandler } from "../../types/ResultHandler";
import { useConvertCurrencyForm } from "./useConvertCurrencyForm";
import { useState } from "react";

export const useConvertCurrency = ({
  onError,
  onSuccess,
}: ResultHandler<ConvertCurrenciesResponse>) => {
  const [isPending, setIsPending] = useState(false);

  const { watch, handleSubmit, ...restForm } = useConvertCurrencyForm();
  const { from, to, amount } = watch();

  const { refetch, ...restQuery } = useQuery(
    ["convert", from, to, amount],
    (context) => CurrenciesServices.convertCurrencies({ from, to, amount }),
    {
      enabled: false,
      onError: (err) => {
        onError?.(err as Error);
      },
      onSuccess,
    }
  );

  const handleConvert = handleSubmit((data) => {
    console.log("submit");
    refetch();
  });

  return {
    form: { handleConvert, ...restForm },
    query: { ...restQuery },
  };
};

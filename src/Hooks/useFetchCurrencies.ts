import { useMemo } from "react";
import {
  CurrenciesServices,
  FetchAllCurrenciesResponse,
} from "../services/CurrenciesServices";
import { useQuery } from "@tanstack/react-query";
import { ResultHandler } from "../types/ResultHandler";

interface UseFetchCurrenciesProps extends ResultHandler {}

export const useFetchCurrencies = ({
  onError,
  onSuccess,
}: UseFetchCurrenciesProps) => {
  const { data, ...restQuery } = useQuery<FetchAllCurrenciesResponse>(
    ["currencies"],
    CurrenciesServices.fetchAllCurrencies,
    {
      onError: (err) => {
        onError?.(err as Error);
      },
      onSuccess: () => {
        onSuccess?.();
      },
    }
  );

  const currencies = useMemo(() => {
    if (data) {
      return Object.entries(data.currencies); //["AED", "asdadad"]
    }
  }, [data]);

  return { currencies, ...restQuery };
};

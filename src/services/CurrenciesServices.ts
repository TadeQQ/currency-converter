import { apiClient } from "../libs/axios";

export interface FetchAllCurrenciesResponse {
  success: boolean;
  currencies: Record<string, string>;
}

const fetchAllCurrencies = async () => {
  const res = await apiClient.get<FetchAllCurrenciesResponse>("/list");
  return res.data;
};

interface ConvertCurrenciesData {
  from: string;
  to: string;
  amount: string;
}
export interface ConvertCurrenciesResponse {
  date: string;
  historical: string;
  info: {
    rate: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}

const convertCurrencies = async ({
  from,
  to,
  amount,
}: ConvertCurrenciesData) => {
  const res = await apiClient.get<ConvertCurrenciesResponse>("/convert", {
    params: { from, to, amount },
  });
  return res.data;
};

export const CurrenciesServices = {
  convertCurrencies,
  fetchAllCurrencies,
};

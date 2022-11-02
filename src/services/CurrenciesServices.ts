import { apiClient } from "../libs/axios";

// type Imiona = "Marek" | "Maciek";

// type Obj = Record<Imiona, boolean | number>;

interface FetchAllCurrenciesResponse {
  success: boolean;
  symbols: Record<string, string>;
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

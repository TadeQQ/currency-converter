import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { Historical } from "../components/Historical/Historical";
import { queryClient } from "../index";
import { ConvertCurrenciesResponse } from "../services/CurrenciesServices";
export const historyPageLoader = (loaderArgs: LoaderFunctionArgs) => {
  // console.log(loaderArgs.params);
  const queries = queryClient.getQueriesData<ConvertCurrenciesResponse>({
    queryKey: ["convert"],
    predicate: (query) => Boolean(query.state.data),
  });
  const data = queries.map((query) => query[1]) as ConvertCurrenciesResponse[];
  return data;
};
export const HistoryPage = () => {
  return (
    <div>
      <Historical />
    </div>
  );
};

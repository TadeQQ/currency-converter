import { useState, useEffect } from "react";
import { useQueryClient, useIsRestoring } from "@tanstack/react-query";

import { ConvertCurrenciesResponse } from "../services/CurrenciesServices";

export const useHistoryConvert = () => {
  const queryClient = useQueryClient();
  const isRestoring = useIsRestoring();
  const [history, setHistory] = useState<ConvertCurrenciesResponse[]>([]);

  useEffect(() => {
    const queries = queryClient.getQueriesData({ queryKey: ["convert"] });
    const data = queries.map(
      (query) => query[1]
    ) as ConvertCurrenciesResponse[];
    console.log(data);
    setHistory(data);
  }, [isRestoring]);

  return { history };
};

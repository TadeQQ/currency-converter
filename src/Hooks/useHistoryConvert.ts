import { useState, useEffect, useCallback } from "react";
import {
  useQueryClient,
  useIsRestoring,
  QueryFilters,
  useQueries,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import { ConvertCurrenciesResponse } from "../services/CurrenciesServices";

export const useHistoryConvert = () => {
  const queryClient = useQueryClient();
  const isRestoring = useIsRestoring();
  const navigate = useNavigate();
  const history = useLoaderData() as ConvertCurrenciesResponse[];

  // const [history, setHistory] = useState<ConvertCurrenciesResponse[]>([]);

  const clearHistory = useCallback(() => {
    queryClient.removeQueries({ queryKey: ["convert"] });
    navigate(0);
  }, [navigate]);

  return { history, clearHistory };
};

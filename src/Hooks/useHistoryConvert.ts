import { useState, useEffect, useCallback, useRef } from 'react';
import { useQueryClient, useIsRestoring } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

import { ConvertCurrenciesResponse } from '../services/CurrenciesServices';

export const useHistoryConvert = () => {
  const queryClient = useQueryClient();
  const isRestoring = useIsRestoring();
  const navigate = useNavigate();
  const history = useLoaderData() as ConvertCurrenciesResponse[];

  // const [history, setHistory] = useState<ConvertCurrenciesResponse[]>([]);

  // const ref - useRef();

  //   const test = {
  //     wlasciowsc1: "tst",
  //     wlasiciwcs2: "sdsd",
  //   };

  //   useEffect(() => {
  //     console.log("c")
  //   }); // co render

  //   useEffect(() => {
  //     console.log("c")
  //   }, []); // po pierwszym renderze

  //   useEffect(() => {
  //     console.log("c")
  //   }, [test.wlasciowsc1]);

  //   useEffect(() => {
  // (async () => {
  //   fetch("/");
  // })();

  // const add = (x) => {
  //   return (y) => {
  //     return x+y;
  //   }
  // }

  // add(1)(2);

  // const addWith1 = add(1);

  // const test = () => {
  //   console.log("a");

  //   setTimeout(() => {
  //     console.log("b")
  //   }, 0)

  //   console.log("c")
  // } // a, c, b

  // addWith1(2)
  //   }, [])

  const clearHistory = useCallback(() => {
    queryClient.removeQueries({ queryKey: ['convert'] });
    navigate(0);
  }, [navigate]);

  /// refreshing, try to make cond to stop refreshing after click
  return { history, clearHistory };
};

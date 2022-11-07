import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

export const historyPageLoader = (loaderArgs: LoaderFunctionArgs) => {
  console.log(loaderArgs.params);
  return "historical";
};

export const HistoryPage = () => {
  const data = useLoaderData();

  console.log(data);
  return <div>HistoryPage</div>;
};

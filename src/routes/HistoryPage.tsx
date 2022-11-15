import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { Historical } from "../components/Historical/Historical";

export const historyPageLoader = (loaderArgs: LoaderFunctionArgs) => {
  // console.log(loaderArgs.params);
  return "historical";
};
export const HistoryPage = () => {
  return (
    <div>
      <Historical />
    </div>
  );
};

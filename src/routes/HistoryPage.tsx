import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import { useHistoryConvert } from "../Hooks/useHistoryConvert";

export const historyPageLoader = (loaderArgs: LoaderFunctionArgs) => {
  // console.log(loaderArgs.params);
  return "historical";
};

export const HistoryPage = () => {
  const data = useLoaderData();
  const { history } = useHistoryConvert();

  console.log(data);
  return (
    <div>
      HistoryPage
      {history?.map((el) => (
        <li key={el?.info.timestamp}>
          <div>{el?.query.amount}</div>
          <div>{el?.query.from}</div>
          <div>{el?.query.to}</div>
        </li>
      ))}
    </div>
  );
};

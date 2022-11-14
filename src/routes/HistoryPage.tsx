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
      <div>Converts history: </div>
      <ul>
        {history?.map((el) => (
          <li key={el?.info.timestamp}>
            {el?.query.amount
              ? `${el?.query.from} to ${el?.query.to} = ${el?.result}`
              : "Please reload page"}
          </li>
        ))}
      </ul>
    </div>
  );
};

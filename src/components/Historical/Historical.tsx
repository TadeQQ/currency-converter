import React from "react";
import { useLoaderData } from "react-router-dom";
import { useHistoryConvert } from "../../Hooks/useHistoryConvert";
import { HistoricalStyles } from "./Historical.styled";

export const Historical = () => {
  const data = useLoaderData();
  const { history } = useHistoryConvert();
  console.log(data);
  return (
    <HistoricalStyles.Historical>
      <HistoricalStyles.Title>Converts history</HistoricalStyles.Title>
      <ul>
        {history?.map((el) =>
          el?.success ? (
            <li key={el?.info.timestamp}>
              {el?.query.amount} {el?.query.from} to {el?.query.to} ={" "}
              {Math.round(el?.result * 100) / 100}
            </li>
          ) : (
            <li>Waiting for next converse</li>
          )
        )}
      </ul>
    </HistoricalStyles.Historical>
  );
};

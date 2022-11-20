import React from "react";
import { useLoaderData } from "react-router-dom";
import { useHistoryConvert } from "../../Hooks/useHistoryConvert";
import { HistoricalStyles } from "./Historical.styled";
import { format } from "date-fns";
export const Historical = () => {
  const { history, clearHistory } = useHistoryConvert();
  return (
    <HistoricalStyles.Historical>
      <HistoricalStyles.Title>Converts history</HistoricalStyles.Title>
      <ul style={{ listStyleType: "none" }}>
        {history?.map((el) => (
          <HistoricalStyles.ListElement key={el?.info.timestamp}>
            {el?.query.amount} {el?.query.from} to {el?.query.to} ={" "}
            {Math.round(el?.result * 100) / 100}
            {el.date}
            {/* {format(new Date(el?.date), "EEEE LLL y")} */}
          </HistoricalStyles.ListElement>
        ))}
      </ul>
      <HistoricalStyles.Clear onClick={clearHistory}>
        clear
      </HistoricalStyles.Clear>
    </HistoricalStyles.Historical>
  );
};

import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data",
  headers: {
    apiKey: process.env.REACT_APP_API_KEY as string,
  },
});

import axios from "axios";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

export const apiClient = axios.create({
  baseURL: "https://api.apilayer.com/currency_data",
  headers: {
    apiKey: apiKey,
  },
});

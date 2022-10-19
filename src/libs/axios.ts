import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data",
  headers: {
    apiKey: "maGGoEXvLaU6eLv0YNHJBRmXZweG0Rhe", // process.env.REACT_APP_API_KEY as string
  },
});

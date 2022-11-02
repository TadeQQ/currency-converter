import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.apilayer.com/currency_data",
  headers: {
    apiKey: "maGGoEXvLaU6eLv0YNHJBRmXZweG0Rhe",
  },
});

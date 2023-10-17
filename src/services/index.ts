import axios, { AxiosInstance } from "axios";

export const baseInstance: AxiosInstance = axios.create({
  baseURL: `https://aspire.dev`,
  headers: {
    Accept: "application/json",
  },
});

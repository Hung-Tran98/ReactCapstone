import axios from "axios";
import { getLocalStorage } from "../utils";
import { ACCESSTOKEN } from "../consts";

const BASE_URL = "https://shop.cyberlearn.vn/api";
export const axoisWithAuth = axios.create({
  baseURL: BASE_URL,
  timeout: 180_000,
});

axoisWithAuth.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${getLocalStorage(ACCESSTOKEN)}`,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

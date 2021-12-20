import axios from "axios";
import env from "@/config/env";
import Cookies from "js-cookie";

const SE_API = axios.create({
  baseURL: env.base_url,
  // headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

SE_API.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${Cookies.get("token")}`;

  return config;
});

export default SE_API;

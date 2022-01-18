import axios from "axios";

const SE_API = axios.create({
  baseURL: 'http://backend_laravel.test/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default SE_API;

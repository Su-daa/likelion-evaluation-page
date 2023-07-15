import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9002/",
  timeout: 3000,
});

export default axiosInstance;

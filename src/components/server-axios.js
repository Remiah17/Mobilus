import axios from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    accept: "application/json",
  },
});

export default instance;

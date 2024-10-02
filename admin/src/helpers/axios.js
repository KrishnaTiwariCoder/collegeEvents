import axios from "axios";
const API = "http://localhost:8080/";

const instance = axios.create({
  baseURL: `${API}`,
  headers: {
    Authorization: window.localStorage.getItem("token"),
  },
});

export default instance;

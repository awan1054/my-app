import axios from "axios";

const api = axios.create({
  // baseURL: "https://mern-grocery-cy0g.onrender.com",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default api;

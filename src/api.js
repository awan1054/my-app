import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-grocery-cy0g.onrender.com",
  withCredentials: true,
});

export default api;

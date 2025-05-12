import axios from "axios";

const api = axios.create({
  // baseURL: "https://mern-grocery-cy0g.onrender.com",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default api;

export const getData = async (url, err) => {
  const res = await api.get(url);
  if (res.status == 200 || res.status == 201) {
    return res;
  }
  throw new Error(err || "unable to get data");
};

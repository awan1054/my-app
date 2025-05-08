import api from "../api";

export const getData = async (url) => {
  const res = await api.get(url);
  if (res.status == 200) {
    return res;
  }
  throw new Error("unable to get data");
};

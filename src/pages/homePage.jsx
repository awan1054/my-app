import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import useCheckAuth from "../hooks/checkAuth";

const reducer = (count, action) => {
  if (action.type === "INC") {
    return (count = count + 1);
  } else {
    return count - 1;
  }
};
export default function HomePage() {
  useCheckAuth();

  const [count, setDate] = useReducer(reducer, 0);
  const [data, setData] = useState([]);
  const getDat = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    getDat();
  }, []);
  return (
    <div>
      <div>
        {count}
        <div className="space-x-2">
          <button
            onClick={() => setDate({ type: "INC" })}
            className="bg-slate-300 p-3"
          >
            INC
          </button>
          <button onClick={setDate} className="bg-slate-300 p-3">
            DES
          </button>
        </div>
      </div>
      <div>
        {data.map((d) => {
          return <div key={d.id}>{d.title}</div>;
        })}
      </div>
    </div>
  );
}

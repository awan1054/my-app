import React, { useEffect, useState } from "react";

const Product = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://67e90bcebdcaa2b7f5b86b8c.mockapi.io/task`
      );
      console.log("res", res);

      const data = await res.json();
      console.log("data", data);
      setdata(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((d) => (
        <div>
          <p>{d.id}</p>
          <p>{d.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";

const Product = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://67e90bcebdcaa2b7f5b86b8c.mockapi.io/task`
      );
      console.log(res);
      const datas = await res.json();
      setDatas(datas);
    };
    fetchData();
  }, []);
  return (
    <div>
      {datas.map((d) => (
        <>
          <p>{d.id}</p>
          <p>{d.name}</p>
          <p>{d.avatar}</p>
        </>
      ))}
    </div>
  );
};

export default Product;

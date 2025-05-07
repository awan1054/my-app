import React, { use, useEffect, useState } from "react";
import api from "../api";

const Product = () => {
  const [Product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await api.get("/product");
      if (response.data.data) {
        setProduct(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Product?.map((e) => (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <a href="#" className="block">
                    <img
                      src={`http://localhost:5000/${e.image}`}
                      alt="Category 1"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        {" "}
                        {e.productname}
                      </h3>
                      <p className="text-gray-600">{e.details}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;

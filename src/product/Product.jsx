import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { getData } from "../api";
import useQuery from "../hooks/useQuery";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ErrorBoundary fallback={<p>Error:unable to get product</p>}>
                <Suspense fallback={<p>Loading....</p>}>
                  <Products />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;

const url = "/product";
export function Products() {
  const product = useQuery({
    fn: () => getData(url),
    key: url,
  });
  console.log(product);
  return (
    <>
      {product?.data?.data?.map((p) => (
        <Productcomp product={p} key={p?._id} />
      ))}
    </>
  );
}

export function Productcomp({ product }) {
  if (!product) {
    return null;
  }
  console.log(product.productname);
  const fristImg =
    product?.image?.length > 0 ? product.image[0] : "/placeholder.svg";
  console.log(fristImg);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link to={product._id} className="block">
        <img
          src={`http://localhost:5000/${fristImg}`}
          alt="Category 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2"> {product.productname}</h3>
          <p className="text-gray-600">{product.details}</p>
        </div>
      </Link>
    </div>
  );
}

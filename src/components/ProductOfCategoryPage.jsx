import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Productcomp } from "../product/Product";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import useQuery from "../hooks/useQuery";
import { getData } from "../api";

const ProductOfCategoryPage = () => {
  const { catgId } = useParams();
  const [catgName, setCategory] = useState(null);

  return (
    <div className="space-y-12">
      <h1
        className="text-7xl"
        style={{
          viewTransitionName: `catg-name-${catgName}`,
        }}
      >
        {catgName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ErrorBoundary fallback={<div>eror..</div>}>
          <Suspense fallback={<div>loading...</div>}>
            <ProductOfCategorycomp id={catgId} getCatgName={setCategory} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
export default ProductOfCategoryPage;

export function ProductOfCategorycomp({ id, getCatgName }) {
  if (!id) throw new Error("id is required!!");
  const url = `/category/${id}/product`;
  const catgProduct = useQuery({
    fn: () => getData(url),
    key: url,
  });

  const sendCatgName = useCallback(() => {
    const findCateName = catgProduct?.data[0]?.category?.find(
      (c) => c._id == id
    );
    getCatgName(findCateName.name);
  }, [catgProduct, id, getCatgName]);
  useEffect(() => {
    sendCatgName();
  }, [sendCatgName]);
  return (
    <>
      {catgProduct?.data?.map((c) => (
        <Productcomp product={c} key={c._id} />
      ))}
    </>
  );
}

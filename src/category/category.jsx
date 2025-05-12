import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import api, { getData } from "../api";
import useQuery from "../hooks/useQuery";

const Category = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <ErrorBoundary fallback={<p>Error: unable to get categroy</p>}>
                <Suspense fallback={<p>loading....</p>}>
                  <CategoriesComp />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const url = "/category";
export function CategoriesComp() {
  const category = useQuery({
    fn: () => getData(url),
    key: url,
  });

  return (
    <>
      {category?.data?.data?.map((e) => (
        <div
          key={e._id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <Link viewTransition to={`/category/${e._id}`} className="block">
            <img
              src={`http://localhost:5000/${e.catgImg}`}
              alt="Category 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  viewTransitionName: `catg-name-${e.name}`,
                }}
              >
                {" "}
                {e.name}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
// export function CategoriesComp() {
//   const [category, setCategory] = useState([]);
//   const fetchCategory = async () => {
//     const response = await api.get("/category");
//     setCategory(response.data.data);
//   };
//   useEffect(() => {
//     fetchCategory();
//   }, []);
//   return (
//     <>
//       {category?.map((e) => (
//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <a href="#" className="block">
//             <img
//               src={`http://localhost:5000/${e.catgImg}`}
//               alt="Category 1"
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-bold mb-2"> {e.name}</h3>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               </p>
//             </div>
//           </a>
//         </div>
//       ))}
//     </>
//   );
// }

export default Category;

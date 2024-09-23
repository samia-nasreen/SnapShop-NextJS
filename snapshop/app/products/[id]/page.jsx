// "use client";

// import { useParams } from "next/navigation";
// import ProductDetail from "@/components/ProductDetail/ProductDetail";
// import RelatedItems from "@/components/ProductDetail/RelatedItems";
// import Breadcrumb from "@/components/UI/Breadcrumb";
// import ProductDetailSkeleton from "@/components/ProductDetail/ProductDetailSkeleton";
// import { useGetProductQuery } from "@/api/productsApi";

// const ProductDetailPage = () => {
//   const { productId } = useParams();
//   const {
//     data: product,
//     error,
//     isError,
//     isLoading,
//   } = useGetProductQuery(productId);

//   return (
//     <div className="px-1 md:px-28">
//       <h2>{productId}</h2>
//       {/* <Breadcrumb
//         parts={[
//           "Account",
//           product ? product.category : "Loading...",
//           product ? product.name : "Loading...",
//         ]}
//         className="ml-4"
//       />
//       {isLoading && <ProductDetailSkeleton />}
//       {/* {!isLoading && product && (
//         <>
//           <ProductDetail product={product} />
//           <RelatedItems category={product.category} />
//         </>
//       )} */}
//       {isError && <p>Error occured: {error}</p>} */}
//     </div>
//   );
// };

// export default ProductDetailPage;

import React from "react";

const page = () => {
  return <div>detail page problem</div>;
};

export default page;

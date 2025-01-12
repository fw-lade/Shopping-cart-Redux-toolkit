import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <div className="py-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-8">
          {products.length ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <div>No Products found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

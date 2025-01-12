import React from "react";

const ProductCard = ({ product }) => {

    const {id, name, price, image, category, date} = product || {}
  console.log(product);

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Products"
          />
        </figure>
        <div className="card-body bg-white">
          <h2 className="card-title text-gray-800">{name}</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, animi. Beatae nisi asperiores similique temporibus.</p>
          <div className="card-actions justify-end">
            <p className="text-blue-600 font-semibold">${price}</p>
            <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

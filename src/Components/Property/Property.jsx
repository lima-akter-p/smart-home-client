import React from "react";
import { Link } from "react-router";
import { ImLocation } from "react-icons/im";

const Property = ({ property }) => {
  const { propertyName, category, description, location, price, image ,_id} =
    property;
  return (
    <div className=" max-w-sm bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt="Property"
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
        <span className="absolute top-3 left-3 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {propertyName}
        </h2>

        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <p className="text-gray-700 font-medium mb-2"><ImLocation /> {location}</p>

        <p className="text-xl font-bold text-green-600 mb-4">{price}৳</p>

        <Link to={`/view-details/${_id}`}>
          {" "}
          <button className="w-full bg-linear-to-r from-blue-500 to-violet-500 hover:from-violet-500 hover:to-blue-500
           text-black py-2 rounded-lg hover:bg-gray-700 transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Property;

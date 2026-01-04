import React from "react";

const AdvancedSearch = () => {
  return (
    <section className="bg-gray-100 py-12 mt-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          🔍 Advanced Property Search
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Location */}
          <div>
            <label className="font-semibold">Location</label>
            <input
              type="text"
              placeholder="Enter city or area"
              className="w-full border rounded-xl px-4 py-2 mt-1"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="font-semibold">Property Type</label>
            <select className="w-full border rounded-xl px-4 py-2 mt-1">
              <option>Apartment</option>
              <option>House</option>
              <option>Commercial</option>
              <option>Land</option>
              <option>Luxury Home</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="font-semibold">Min Price</label>
            <input
              type="number"
              placeholder="e.g. 5000"
              className="w-full border rounded-xl px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="font-semibold">Max Price</label>
            <input
              type="number"
              placeholder="e.g. 500000"
              className="w-full border rounded-xl px-4 py-2 mt-1"
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="font-semibold">Bedrooms</label>
            <select className="w-full border rounded-xl px-4 py-2 mt-1">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="font-semibold">Bathrooms</label>
            <select className="w-full border rounded-xl px-4 py-2 mt-1">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>

          {/* Furnishing */}
          <div>
            <label className="font-semibold">Furnishing</label>
            <select className="w-full border rounded-xl px-4 py-2 mt-1">
              <option>Any</option>
              <option>Furnished</option>
              <option>Semi-Furnished</option>
              <option>Unfurnished</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Search Property
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedSearch;

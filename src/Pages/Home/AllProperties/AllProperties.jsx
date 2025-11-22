import React, { useEffect, useState } from "react";
import Property from "../../../Components/Property/Property";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const[sort,setSort] = useState("createdAt-asc")
 
  useEffect(() => {
    fetch(`http://localhost:3000/properties?sortBy=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, [sort]);
  useEffect(() => {
    if (search === "") {
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [search]);
  loading;
  //  if(loading)return <span>loading...</span>

  const normalize = (text = "") =>
    text.trim().replace(/\s+/g, " ").toLowerCase();

  const finalProperties = properties.filter((property) => {
    const term = normalize(search);
    return normalize(property.propertyName).includes(term);
  });

  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 py-3">
        <div className="relative">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>
        <select onChange={(e)=>setSort(e.target.value)} defaultValue={sort} className="select">
          <option disabled={true}>Sort by</option>
          <option value="price-desc">price high to low</option>
          <option value="price-asc">price low to high</option>
          <option value="createdAt-desc">recent property</option>
          <option value="createdAt-ase">old property</option>
        </select>
      </div>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 mt-15 gap-3 gap-y-10  ">
        {finalProperties.map((property) => (
          <Property key={property._id} property={property}></Property>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;

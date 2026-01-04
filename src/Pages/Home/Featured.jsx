import React from "react";

const FeaturedProperties = () => {
  const properties = [
    {
      title: "Modern Apartment in Gulshan",
      location: "Dhaka, Bangladesh",
      type: "Apartment",
      price: "$1200/month",
      img: "https://i.ibb.co.com/jvbnMmsD/home4.jpg"
    },
    {
      title: "Luxury Villa Near Beach",
      location: "Chattogram, Bangladesh",
      type: "Luxury Home",
      price: "$4500/month",
      img: "https://i.ibb.co.com/gGd6kj2/home1.jpg"
    },
    {
      title: "Commercial Office Space",
      location: "Dhaka, Bangladesh",
      type: "Commercial",
      price: "$2500/month",
      img: "https://i.ibb.co.com/8L3grKVZ/home8.jpg"
    },
    {
      title: "Cozy Family House",
      location: "Sylhet, Bangladesh",
      type: "House",
      price: "$900/month",
      img: "https://i.ibb.co.com/5xjj6327/home10.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
      <p className="text-center text-gray-600 mt-2">
        Explore our premium and popular property listings
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg duration-300 group overflow-hidden"
          >
            <img
              src={property.img}
              alt={property.title}
              className="h-48 w-full object-cover group-hover:scale-105 duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{property.location}</p>
              <p className="text-gray-700 font-medium mt-2">{property.price}</p>
              <span className="text-blue-600 text-sm mt-1 inline-block">{property.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;

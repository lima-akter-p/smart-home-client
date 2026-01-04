export default function PropertyCategories() {
  const categories = [
    {
      name: "Apartments",
      desc: "Modern and budget-friendly apartments in prime city locations.",
      img: "https://i.ibb.co.com/ycc5rSbD/home5.jpg"
    },
    {
      name: "Houses",
      desc: "Independent family houses with space, comfort and privacy.",
      img: "https://i.ibb.co.com/5xjj6327/home10.jpg"
    },
    {
      name: "Commercial",
      desc: "Shops, offices and commercial spaces for business use.",
      img: "https://i.ibb.co.com/8L3grKVZ/home8.jpg"
    },
    {
      name: "Land",
      desc: "Residential and commercial plots suitable for future development.",
      img: "https://i.ibb.co.com/gGd6kj2/home1.jpg"
    },
    {
      name: "Luxury Homes",
      desc: "Premium villas and high-end residences with exclusive amenities.",
      img: "https://i.ibb.co.com/jvbnMmsD/home4.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Property Categories</h2>
      <p className="text-center text-gray-600 mt-2">
        Browse properties by type that best matches your needs
      </p>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 mt-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow group bg-white"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="h-32 w-full object-cover group-hover:scale-105 duration-300"
            />

            <div className="p-3 text-center">
              <h3 className="font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {cat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

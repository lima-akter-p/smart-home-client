export default function PopularLocations() {
  const locations = [
    {
      city: "Dhaka",
      property: "120+ Properties",
      img: "https://i.ibb.co.com/fYrPJmLB/dhaka.jpg",
      map: "https://i.ibb.co.com/k2PJTZLy/Dhaka-map.jpg"
    },
    {
      city: "Chattogram",
      property: "85+ Properties",
      img: "https://i.ibb.co.com/XZ7rrTCw/chatto.jpg",
      map: "https://i.ibb.co.com/vxxdNYmb/mapcha.gif"

    },
    {
      city: "Sylhet",
      property: "60+ Properties",
      img: "https://i.ibb.co.com/Ng188PKF/sylet.webp",
      map:"https://i.ibb.co.com/Lzpb3r3h/Sylhet-City-Map.png"
    },
    {
      city: "Khulna",
      property: "50+ Properties",
      img: "https://i.ibb.co.com/ddq4wvx/khulna.jpg",
      map: "https://i.ibb.co.com/gbZqknx2/ku.jpg"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Popular Locations</h2>
      <p className="text-center text-gray-600 mt-2">
        Discover properties in the most searched cities
      </p>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
        {locations.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow group"
          >
            {/* background main image */}
            <img
              src={item.img}
              alt={item.city}
              className="w-full h-52 object-cover group-hover:scale-105 duration-300"
            />

            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* mini map overlay */}
            <div className="absolute top-3 right-3 bg-white rounded-xl shadow overflow-hidden">
              <img
                src={item.map}
                alt="map"
                className="w-28 h-20 object-cover"
              />
            </div>

            {/* city text */}
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-xl font-semibold">{item.city}</h3>
              <p className="text-sm">{item.property}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

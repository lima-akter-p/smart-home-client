export default function LatestBlog() {
  const blogs = [
    {
      title: "Top Tips for First-Time Home Buyers",
      img: "https://i.ibb.co.com/8L3grKVZ/home8.jpg",
      date: "January 2026",
      desc:
        "Buying your first home is exciting, but it can also feel confusing if you do not plan properly. Before starting, create a clear budget so you know how much you can afford without pressure. Research different locations and compare nearby schools, transportation, and neighborhood facilities. Always check property documents carefully and avoid rushing into decisions because of attractive offers. Visiting multiple houses helps you understand market prices better. Saving for down payment early is helpful and reduces loan stress. Most importantly, take advice from trusted real estate professionals who can guide you safely through the entire buying process."
    },
    {
      title: "Renting vs Buying – Which Option Is Better?",
      img: "https://i.ibb.co.com/5xjj6327/home10.jpg",
      date: "January 2026",
      desc:
        "Many people become confused when deciding whether they should rent a home or buy one. Renting is usually more flexible because you can move easily and avoid large maintenance costs. It is helpful for students, new job holders, or people who change cities often. Buying a home is better for long-term stability and building ownership value over time. However, it requires a bigger budget and responsibility for repairs. The right choice depends on your income, future plans, and location price. Before deciding, compare monthly costs, lifestyle needs, and how long you plan to stay in the same place."
    },
    {
      title: "Beginner’s Guide to Smart Property Investment",
      img: "https://i.ibb.co.com/ycc5rSbD/home5.jpg",
      date: "January 2026",
      desc:
        "Real estate investment can be a great way to grow your money if you plan carefully and stay patient. Start by learning basic terms such as rental income, resale value, and market demand. Choosing the right location is very important because areas with schools, hospitals, and good transport usually increase in value faster. Avoid buying property only based on emotions; always compare prices and check legal papers. It is better to begin with small investments and gain experience step by step. With research, long-term thinking, and good advice, property investment can become a stable and profitable financial decision."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Latest Blog & Real Estate Tips</h2>
      <p className="text-center text-gray-600 mt-2">
        Read helpful articles about buying, renting and investing in property
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-lg duration-300">
            <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover rounded-t-2xl" />

            <div className="p-4">
              <p className="text-sm text-gray-500">{blog.date}</p>

              <h3 className="text-lg font-semibold mt-1">{blog.title}</h3>

              <p className="text-gray-700 text-sm mt-2 text-justify">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

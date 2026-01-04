import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">About HomeNest</h2>
        <p className="text-gray-500 mt-3">
          Your trusted platform for buying, selling, and renting properties across Bangladesh
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div>
          <img
            src="https://i.ibb.co.com/gGd6kj2/home1.jpg"
            alt="HomeNest Office"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6">
          <p className="text-gray-500 text-lg">
            HomeNest is a modern real estate platform designed to simplify property transactions. Whether you’re looking to buy, rent, or sell, we provide an easy-to-use interface, detailed property listings, and expert support at every step. We connect property owners and seekers while ensuring a secure and transparent experience.
          </p>

          <p className="text-gray-500 text-lg">
            Our platform offers advanced search and filter options, verified listings, and real-time updates. With a focus on innovation and customer satisfaction, HomeNest aims to become the most reliable and comprehensive real estate platform in Bangladesh.
          </p>

          {/* Optional Mission / Vision / Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl text-center shadow">
              <h4 className="font-semibold mb-2 text-blue-600">Our Mission</h4>
              <p className="text-gray-700 text-sm">
                To make property search and management seamless, trustworthy, and accessible for everyone.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl text-center shadow">
              <h4 className="font-semibold mb-2 text-green-600">Our Vision</h4>
              <p className="text-gray-700 text-sm">
                To become the leading real estate platform providing reliable and innovative solutions across Bangladesh.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl text-center shadow">
              <h4 className="font-semibold mb-2 text-yellow-600">Our Values</h4>
              <p className="text-gray-700 text-sm">
                Transparency, Customer-Centricity, Innovation, and Trustworthiness guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

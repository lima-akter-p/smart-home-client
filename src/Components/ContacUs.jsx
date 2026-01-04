import React from "react";

const ContactUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-3">
          Have questions? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className=" shadow-lg rounded-2xl p-8">
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                placeholder="Type your message..."
                rows="5"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600  py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className=" rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p>123, Gulshan Avenue, Dhaka, Bangladesh</p>
          </div>

          <div className=" rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p>+880 1234 567890</p>
          </div>

          <div className=" rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p>support@homenest.com</p>
          </div>

          {/* Optional Map */}
          <div className="rounded-2xl overflow-hidden shadow mt-4">
            <iframe
              title="HomeNest Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.974728598392!2d90.40270631498993!3d23.81033218458954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0f36e2d49%3A0x9e5f780d644f1a8f!2sGulshan%20Ave%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1677123456789!5m2!1sen!2sbd"
              className="w-full h-56 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

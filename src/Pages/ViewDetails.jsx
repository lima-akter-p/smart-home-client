import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AuthContex } from "../Components/Provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Components/Loading/Loading";
import { FaLocationDot } from "react-icons/fa6";


const ViewDetails = () => {
  const { user } = useContext(AuthContex);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`https://smart-home-api-server.vercel.app/properties/${id}`)
      .then((res) => {
        setProperty(res.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading></Loading>;

  const handleAddRating = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const newRating = {
      propertyName: property.propertyName,
      description: form.description.value,
      image: property.image,
      Rating: form.Rating.value,
      postedDate: new Date().toISOString(),
      userName: user?.displayName,
      userEmail: user?.email,
    };

    axios
      .post(
        "https://smart-home-api-server.vercel.app/RatingProperty",
        newRating
      )
      .then((res) => {
        setLoading(false);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Insert success!",
            icon: "success",
            draggable: true,
          });
        }
      });
    form.reset();
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
          {property.name}
        </h1>

        {/* Image Section */}
        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-md mb-10">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layout */}
        <div className=" bg-white p-3 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className=" md:col-span-2 space-y-6">
            {/* Price + Category */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-violet-900">
                ৳ {property.price}
              </span>

              <span className="px-4 py-1 bg-violet-100 text-violet-800 font-medium rounded-full text-sm">
                {property.category}
              </span>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Property Information */}
            <div className="p-4 rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">
                Property Information
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <p>
                  🏢 Property ID: <span className="font-semibold">#A1025</span>
                </p>
                <p>
                  📌 Type: <span className="font-semibold">Apartment</span>
                </p>
                <p>
                  📏 Area: <span className="font-semibold">1650 Sqft</span>
                </p>
                <p>
                  🛏 Bedrooms: <span className="font-semibold">3</span>
                </p>
                <p>
                  🛁 Bathrooms: <span className="font-semibold">3</span>
                </p>
                <p>
                  🛋 Furnishing:{" "}
                  <span className="font-semibold">Semi-Furnished</span>
                </p>
                <p>
                  🧭 Facing: <span className="font-semibold">South</span>
                </p>
                <p>
                  🏗 Year Built: <span className="font-semibold">2022</span>
                </p>
                <p>
                  🚪 Floor: <span className="font-semibold">8th</span>
                </p>
              </div>
            </div>
            {/* Amenities */}
            <div className="p-4 rounded-xl border">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                <p>✔ Lift</p>
                <p>✔ Parking</p>
                <p>✔ CCTV Security</p>
                <p>✔ Generator Backup</p>
                <p>✔ Roof Access</p>
                <p>✔ Children Play Area</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Location
              </h2>
              <p className="text-gray-700 text-lg"><FaLocationDot/> {property.location}</p>
            </div>
          </div>
          {/* Contact Info — buttons removed */}
          <div className="border p-4 rounded-xl shadow-sm space-y-2">
            <h2 className="text-xl font-semibold">Contact Information</h2>

            <p>
              📱 Phone: <span className="font-semibold">017xxxxxxxx</span>
            </p>
            <p>
              📧 Email:{" "}
              <span className="font-semibold">lima042176@gmail.com</span>
            </p>
          </div>

          {/* Right Column – Sidebar */}
          <div className="bg-white shadow-lg rounded-2xl p-6 h-fit border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Posted By
            </h3>

            <div className="space-y-3">
              <p className="text-gray-800">
                <b>Name:</b> {property.userName}
              </p>
              <p className="text-gray-800">
                <b>Email:</b> {property.userEmail}
              </p>
              <p className="text-gray-700">
                <b>Posted on:</b>{" "}
                {new Date(property.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* review and rating */}

      <section>
        <div className="  flex justify-center py-10 px-4">
          <div className="  w-full max-w-3xl  shadow-xl rounded-xl p-8">
            <Link to="/all-properties" className="text-sm text-gray-500 mb-3 hover:underline">
              ← Back to Properties
            </Link>

            <h2 className="text-3xl font-bold text-center mb-8">
              Review <span className="text-violet-600">And </span>Rating
            </h2>

            <form onSubmit={handleAddRating} className="space-y-5">
              {/* Property Name + Category */}
              <div className="grid  gap-5">
                <input
                  type="number"
                  name="Rating"
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  className="border p-3 rounded-md w-full"
                  required
                />

                {/* Description */}
                <textarea
                  name="description"
                  placeholder="  short  about this property..."
                  className="border p-3 rounded-md w-full h-28"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md text-white font-semibold 
                    bg-linear-to-r from-violet-500 to-indigo-500 hover:opacity-90"
              >
                Add Rating
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewDetails;

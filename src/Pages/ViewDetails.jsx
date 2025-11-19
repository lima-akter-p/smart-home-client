import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContex } from "../Components/Provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const ViewDetails = () => {
  const[loading,setLoading] = useState(false)
  const { state } = useLocation();
  const { property } = state;

  // From add property
  const { user } = useContext(AuthContex);
  if(loading) return <span>loading....</span>
  const handleAddRating =  (e) => {
    setLoading(true)
    e.preventDefault();
    const form = e.target;

    const newRating = {
      propertyName: property.propertyName,
      description: form.description.value,
      image: property.image,
      Rating: form.Rating.value,
      postedDate:new Date().toISOString() ,
      userName: user?.displayName,
      userEmail:user?.email
    };

    

    console.log(newRating);

    axios.post("http://localhost:3000/RatingProperty", property).then((res) => {
      setLoading(false)
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
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

            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Location
              </h2>
              <p className="text-gray-700 text-lg">📍 {property.location}</p>
            </div>
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
        <div className="flex justify-center py-10 px-4">
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">
            <button className="text-sm text-gray-500 mb-3 hover:underline">
              ← Back to Properties
            </button>

            <h2 className="text-3xl font-bold text-center mb-8">
              Review <span className="text-violet-600">And Rating</span>
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

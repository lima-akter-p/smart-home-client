import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { AuthContex } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const UpdateProperty = () => {
  const { user, userLoding } = useContext(AuthContex);
  const [property, setProperty] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const[loading,setLoading] = useState(true)
  useEffect(() => {
    fetch(`http://localhost:3000/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false)
      });
  }, [id]);
  if (userLoding  || loading) return <span>loading....</span>

  const handleAddUpdate = (e) => {
    setLoading(true)
    e.preventDefault();
    const form = e.target;

    const property = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
    };
    fetch(`http://localhost:3000/updateProperties/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        if(data.modifiedCount > 0 ){
            toast.success('update successfull')
            navigate("/my-properties")
        }
      });
      form.reset();

  };

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">
        <button className="text-sm text-gray-500 mb-3 hover:underline">
          ← Back to Properties
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-violet-600">Update property</span>
        </h2>

        <form onSubmit={handleAddUpdate} className="space-y-5">
          {/* Property Name + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              defaultValue={property.propertyName}
              name="propertyName"
              placeholder="Property Name"
              className="border p-3 rounded-md w-full"
              required
            />

            <select
              name="category"
              defaultValue={property.category}
              className="border p-3 rounded-md w-full"
              required
            >
              <option value="">Select a Category</option>
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>

          {/* Price + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="number"
              name="price"
              defaultValue={property.price}
              placeholder="Price ($)"
              className="border p-3 rounded-md w-full"
              required
            />

            <input
              type="text"
              defaultValue={property.location}
              name="location"
              placeholder="Location (City, Area, Address)"
              className="border p-3 rounded-md w-full"
              required
            />
            {/* <input
              type="date"
              name="postedDate"
              placeholder="Posted Date"
              className="border p-3 rounded-md w-full"
              required
            /> */}
          </div>

          {/* Image URL */}
          <input
            type="text"
            defaultValue={property.image}
            name="image"
            placeholder="Property Image URL"
            className="border p-3 rounded-md w-full"
            required
          />

          {/* Read-only Email + Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="email"
              value={user?.email}
              readOnly
              className="border p-3 rounded-md w-full bg-gray-100"
            />

            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="border p-3 rounded-md w-full bg-gray-100"
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            defaultValue={property.description}
            placeholder="Write a short description about this property..."
            className="border p-3 rounded-md w-full h-28"
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold 
                    bg-linear-to-r from-violet-500 to-indigo-500 hover:opacity-90"
          >
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;

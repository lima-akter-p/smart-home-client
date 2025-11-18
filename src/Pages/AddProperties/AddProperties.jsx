import { useContext } from "react";
import { AuthContex } from "../../Components/Provider/AuthContext";

import axios from "axios";
import Swal from "sweetalert2";

const AddProperties = () => {

  const { user } = useContext(AuthContex);

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();

    const property = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
      createdAt: form.postedDate.value,
      userEmail: user?.email,
      userName: user?.displayName,


    
    };
    
    console.log(property)
    axios.post('http://localhost:3000/newProperty', property).then(res => {

      if (res.data.insertedId) {
        Swal.fire({
          title: "Insert success!",
          icon: "success",
          draggable: true
        });
      }
    })



  };

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8">

        <button className="text-sm text-gray-500 mb-3 hover:underline">
          ← Back to Properties
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">
          Create <span className="text-violet-600">A Property</span>
        </h2>

        <form onSubmit={handleAddProperty} className="space-y-5">

          {/* Property Name + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="propertyName"
              placeholder="Property Name"
              className="border p-3 rounded-md w-full"
              required
            />

            <select
              name="category"
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
              placeholder="Price ($)"
              className="border p-3 rounded-md w-full"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location (City, Area, Address)"
              className="border p-3 rounded-md w-full"
              required
            />
            <input
              type="date"
              name="postedDate"
              placeholder="Posted Date"
              className="border p-3 rounded-md w-full"
              required
            />


          </div>

          {/* Image URL */}
          <input
            type="text"
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
            placeholder="Write a short description about this property..."
            className="border p-3 rounded-md w-full h-28"
            required
          ></textarea>

          {/* Submit */}
          <button type="submit" className="w-full py-3 rounded-md text-white font-semibold 
                    bg-linear-to-r from-violet-500 to-indigo-500 hover:opacity-90">
            Add Property
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProperties;


















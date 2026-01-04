import React, { use, useEffect, useState } from "react";
import { AuthContex } from "../../Components/Provider/AuthContext";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const MyProperties = () => {
  const { user } = use(AuthContex);
  const [myProperties, setMyProperties] = useState([]);

  // console.log(myProperties);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://smart-home-api-server.vercel.app/myProperties?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMyProperties(data);
        });
    }
  }, [user?.email]);
  const handleDeleteProperty = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://smart-home-api-server.vercel.app/myProperties/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your property has been deleted.",
                icon: "success",
              });
              const remainingProperty = myProperties.filter(
                (myProperty) => myProperty._id !== _id
              );
              setMyProperties(remainingProperty);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>my properties :{myProperties.length}</h1>
      <div className="hidden lg:block">
        <table className="table table-x">
          <thead>
            <tr>
              <th>#</th>
              <th>Property Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Posted Date</th>
            </tr>
          </thead>
          <tbody>
            {myProperties.map((myProperty, index) => (
              <tr key={myProperty._id}>
                <th>{index + 1}</th>
                <td>{myProperty.propertyName}</td>
                <td>{myProperty.category}</td>
                <td>{myProperty.price}</td>
                <td>{myProperty.location}</td>
                <td>{myProperty.createdAt}</td>
                <td>
                  <div>
                    <Link to={`/update-property/${myProperty._id}`}>
                      <button className="btn">update</button>
                    </Link>
                    {/* <Link to="/view-details" state={{property}}> <button className="w-full bg-violet-900 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                     View Details
                     </button></Link> */}

                    <button
                      onClick={() => handleDeleteProperty(myProperty._id)}
                      className="btn"
                    >
                      delete
                    </button>

                    <Link
                      to={`/view-details/${myProperty._id}`}
                      state={{ property: myProperty }}
                    >
                      {" "}
                      <button className="btn">veiw detail</button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden grid sm:grid-cols-2  gap-5 my-5">
        {myProperties.map((myProperty) => (
          <div className="border rounded-lg p-5 shadow-md bg-white  ">
            {/* Property Name */}
            <h2 className="text-xl font-bold text-gray-800">{myProperty.propertyName}</h2>

            {/* Info */}
            <p className="text-gray-700 mt-1">
              <strong>Category:</strong>{myProperty.category}
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Price:</strong>{myProperty.price}
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Location:</strong>{myProperty.location}
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Posted Date:</strong> {myProperty.createdAt}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5">
             <Link 
              to={`/view-details/${myProperty._id}`}
                      state={{ property: myProperty }}>
                        {" "}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                View Details
              </button>


             </Link>

             <Link to={`/update-property/${myProperty._id}`}>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                Update
              </button>
             </Link>
              <button  onClick={() => handleDeleteProperty(myProperty._id)}
                      
               className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;

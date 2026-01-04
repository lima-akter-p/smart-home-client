import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Components/Provider/AuthContext";
import axios from "axios";

const MyRatings = () => {
  const { user } = useContext(AuthContex);

  const [myRatings, setMyRatings] = useState([]);
  

  useEffect(() => {
    if (!user) return;
    axios
      .get(`https://smart-home-api-server.vercel.app/myRatings?email=${user.email}`)
      .then((res) => {
        setMyRatings(res.data);
      });
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {myRatings.map((myRating) => (
        <div key={myRating._id} className="max-w-md mt-10  shadow-md rounded-xl overflow-hidden border dark:bg-gray-800 dark:text-white">
          <img
            src={myRating.image}
            alt="Property Thumbnail"
            className="w-full h-48 object-cover"
          />

          <div className="p-5 space-y-3">
            <h2 className="text-xl font-bold">{myRating.propertyName}</h2>

            <div className="flex justify-between text-sm opacity-70">
              <span>
                By: <strong>{myRating.userName}</strong>
              </span>
              <span>Date:{myRating.postedDate}</span>
            </div>

            <div className="flex text-yellow-500 text-lg">{myRating.Rating}</div>

            <p className="text-sm opacity-90">{myRating.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRatings;



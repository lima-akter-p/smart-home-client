import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Components/Provider/AuthContext';
import axios from 'axios';

const MyRatings = () => {
  const { user } = useContext(AuthContex);
 
  

  const [myRatings, setMyRatings] = useState([]);
  console.log(myRatings)


  useEffect(() => {
    axios.get(`http:localhost/3000/myRatings?email=${user.email}`).then(res =>{
        setMyRatings(res.data)
    })
  }, [user]);

  return (
     <div className='border rounded-2xl p-4 shadow-md bg-white justify-around flex gap-4'>
            {/* property thumbnail */}

            <img className='w-32 h-24 object-cover rounded-xl' src="" alt=""/>

            <h2 className='text-xl font-semibold'>name</h2>

            <p className='text-gray-600 text-sm'>reviewer name</p>
            <p className='text-xt font:bold'>Rating</p>
            <p className='text-xt font:bold'>Review</p>
             
            <p className='text-gray-500 text-sm mt1'>Review Date</p>

        </div>
 
  );
};

export default MyRatings;













// 
// import React, { use, useEffect, useState } from 'react';
// import { AuthContex } from '../../Components/Provider/AuthContext';

// const MyRatings = () => {
//      const { user } = use(AuthContex);
//     const[myProperties,setMyProperties] = useState([])
//     console.log(myProperties)
    

//       useEffect(() => {
//         if (user?.name) {
//           fetch(`http://localhost:3000/RatingProperty?name=${user.name}`)
//             .then(res => res.json())
//             .then(data => {
//               console.log(data)
//               setMyProperties(data)
//             })
//         }
    
//       }, [user?.name])
//     return (
        // <div className='border rounded-2xl p-4 shadow-md bg-white justify-around flex gap-4'>
        //     {/* property thumbnail */}

        //     <img className='w-32 h-24 object-cover rounded-xl' src="" alt=""/>

        //     <h2 className='text-xl font-semibold'>{}</h2>

        //     <p className='text-gray-600 text-sm'>reviewer name</p>
        //     <p className='text-xt font:bold'>Rating</p>
        //     <p className='text-xt font:bold'>Review</p>
             
        //     <p className='text-gray-500 text-sm mt1'>Review Date</p>

        // </div>
      
//     )  
// };

// export default MyRatings;
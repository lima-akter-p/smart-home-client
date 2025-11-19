
import React, { use, useEffect, useState, } from 'react';
import { AuthContex } from '../../Components/Provider/AuthContext';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router';

const MyProperties = () => {
  const { user } = use(AuthContex);
  const [myProperties, setMyProperties] = useState([])
  // const navigate = useNavigate();
  // const gotoDetails = () =>{
  //   navigate("/view-details");
  // };
  console.log(myProperties)

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myProperties?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setMyProperties(data)
        })
    }

  }, [user?.email])
  const handleDeleteProperty = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myProperties/${_id}`,{
          method:'DELETE'

        })
        .then(res => res.json())
        .then(data =>{
          if(data.deletedCount){
              Swal.fire({
          title: "Deleted!",
          text: "Your property has been deleted.",
          icon: "success"
         });
         const remainingProperty = myProperties.filter(myProperty => myProperty._id !==_id);
         setMyProperties(remainingProperty)


          }
        })


      
      }
    });

  }
  
  return (
    <div>
      <h1>my properties :{myProperties.length}</h1>
      <div className="overflow-x-auto">
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




            {
              myProperties.map((myProperty, index) => <tr key={myProperty._id}>
                <th>{index + 1}</th>
                <td>{myProperty.propertyName}</td>
                <td>{myProperty.category}</td>
                <td>{myProperty.price}</td>
                <td>{myProperty.location}</td>
                <td>{myProperty.createdAt}</td>
                <td>
                  <div>
                    <Link to={`/update-property/${myProperty._id}`}><button className='btn'>update</button></Link>
                     {/* <Link to="/view-details" state={{property}}> <button className="w-full bg-violet-900 text-white py-2 rounded-lg hover:bg-gray-700 transition-all">
                     View Details
                     </button></Link> */}

                    <button
                      onClick={() => handleDeleteProperty(myProperty._id)}
                      className='btn'>delete</button>


                    <NavLink to="/view-details" state={{ property: myProperty }}> <button className='btn'>veiw detail</button></NavLink>


                  </div>
                </td>

              </tr>)
            }





          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyProperties;

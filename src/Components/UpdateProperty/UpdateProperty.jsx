import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const UpdateProperty = () => {
    const{id} =useParams();
   useEffect(() =>{
    fetch(`http://localhost:3000/properties/${id}`).then(res=>res.json())
    .then(data =>{
        console.log(data)
    })

   },[id])
    return (
        <div>
         <h2>update property</h2>   
        </div>
    );
};

export default UpdateProperty;
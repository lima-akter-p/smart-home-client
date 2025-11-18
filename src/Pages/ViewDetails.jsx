import { useLocation } from "react-router";








const ViewDetails = () => {
       const { state } = useLocation();
   const { property } = state;
   
  


    
   
   
    
    return (
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
            <p className="text-gray-700 text-lg">
              📍 {property.location}
            </p>
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
    
    );
};

export default ViewDetails;
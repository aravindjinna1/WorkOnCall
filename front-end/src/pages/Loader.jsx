import React from "react";

function PostSkeleton () {
  return (

       <div className="bg-white rounded-2xl shadow-lg p-4 animate-pulse">
      
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-xl"></div>

      {/* Text skeletons */}
      <div className="mt-4 space-y-3">
        <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-1/3 bg-gray-300 rounded"></div>

        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-300 rounded"></div>

        <div className="h-3 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
      </div>

    </div>
    
  );
}
export default PostSkeleton ;
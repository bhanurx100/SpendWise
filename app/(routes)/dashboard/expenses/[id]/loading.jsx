import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="ml-2 text-gray-500">Loading...</p>
    </div>
  );
}

export default Loading;
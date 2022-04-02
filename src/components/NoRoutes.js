import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
function NoRoutes() {
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 w-full h-[90vh] bg-[#F7FBFF]`}
    >
      <MdSpaceDashboard className="text-4xl text-gray-600" size={50} />
      <p className="text-2xl font-poppins font-semibold text-gray-600">
        {`Invalid Route, Nothing to see here`}
      </p>
    </div>
  );
}

export default NoRoutes;

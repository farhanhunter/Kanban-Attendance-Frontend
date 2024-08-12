import React from "react";
import Clock from "./Clock";

const ClockContainer = ({ children }) => {
  return (
    <div className="w-full border-gray-900/10 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow rounded-lg w-full max-w-2xl">
        <div className="text-center py-6 border-b border-gray-200">
          <Clock />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ClockContainer;

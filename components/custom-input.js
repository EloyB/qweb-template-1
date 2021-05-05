import React from "react";

export default function CustomInput({ placeholder }) {
  return (
    <div className="space-y-2">
      <p className="text-gray-700 font-semibold text-sm">{placeholder}:</p>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-3 px-4 rounded-lg border-2 border-gray-100 focus:outline-none focus:border-primary focus:border-opacity-50"
      />
    </div>
  );
}

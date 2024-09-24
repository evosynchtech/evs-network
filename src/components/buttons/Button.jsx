import React from "react";

function Button({ title, icon }) {
  return (
    <button
      type="button"
      class="text-white flex justify-center items-center flex-row gap-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
    >
      <span>{title}</span>
      <span>{icon}</span>
    </button>
  );
}

export default Button;

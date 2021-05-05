import React from "react";

export default function CustomButton({ type, size, text, onClick }) {
  const types = {
    primary: "bg-primary hover:bg-primary-hover text-white font-semibold",
    secondary: "ring-2 ring-white hover:text-primary hover:bg-white",
  };

  const sizes = {
    base: "py-3 px-8",
    xl: "py-3 px-24",
  };
  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-semibold focus:outline-none ${types[type]} ${
        size ? sizes[size] : sizes["base"]
      }`}
    >
      {text}
    </button>
  );
}

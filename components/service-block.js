import React from "react";

export default function ServiceBlock({ title, icon, description }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center text-center space-y-10 p-5 rounded-xl"
    >
      <div className="space-y-2 flex flex-col items-center">
        {icon}
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <p className="sm:text-lg">{description}</p>
    </div>
  );
}

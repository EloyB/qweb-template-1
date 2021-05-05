import Image from "next/image";
import React from "react";

export default function TestimonialItem({ description, position, name, image }) {
  return (
    <div className="relative shadow-md p-8 bg-opacity-10 rounded-lg flex flex-col items-start flex-1 space-y-5">
      <p>{description}</p>
      <div className="flex items-center space-x-5">
        <Image
          className="rounded-lg"
          src={image}
          layout="intrinsic"
          width={80}
          height={80}
          objectFit="cover"
        />
        <div>
          <p className="text-sm font-bold text-secondary">{position}</p>
          <p className="font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
}

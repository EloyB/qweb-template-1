import Image from "next/image";
import React from "react";

export default function EmployeeItem({ position, name, image }) {
  return (
    <div className="space-y-3">
      <Image src={image} layout="intrinsic" width={400} height={256} objectFit="cover" />
      <div>
        <p className="text-primary font-bold">{position}</p>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </div>
  );
}

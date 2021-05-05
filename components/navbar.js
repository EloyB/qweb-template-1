import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full bg-white shadow-lg fixed z-50">
      <div className="max-w-screen-xl h-20 px-5 mx-auto flex items-center justify-between xl:px-0">
        <div onClick={() => router.push("/")}>
          <Image
            className="cursor-pointer"
            src="/logo.svg"
            layout="intrinsic"
            height={40}
            width={32}
          />
        </div>
        <div className="flex items-center space-x-5 font-bold">
          <Link href="/aboutus">
            <p className="cursor-pointer hover:text-primary">Over ons</p>
          </Link>
          <Link href="/contact">
            <p className="py-2 px-4 rounded-lg cursor-pointer bg-primary hover:bg-primary-hover text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

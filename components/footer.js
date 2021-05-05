import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-gradient-to-br mt-32 from-primary text-white to-secondary py-10">
      <div className="max-w-screen-xl mx-auto px-5 pb-5 space-y-8 sm:flex sm:flex-col sm:items-center sm:space-y-3 xl:px-0">
        <Image src="/logo-white.svg" layout="intrinsic" height={40} width={32} />
        <div className="space-y-5">
          <h1 className="font-bold text-xl sm:hidden">Links</h1>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
            <Link href="/">Home</Link>
            <Link href="/aboutus">Over ons</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-5 space-y-4 xl:mx-auto xl:px-0 pt-5 border-t-2 border-white border-opacity-20 sm:flex sm:flex-row-reverse sm:justify-between sm:items-center sm:space-y-0">
        <div className="flex items-center space-x-3">
          <a href="#">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p>Made by QWeb Design</p>
      </div>
    </div>
  );
}

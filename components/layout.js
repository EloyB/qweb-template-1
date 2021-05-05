import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="relative font-manrope overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

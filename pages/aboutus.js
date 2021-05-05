import Image from "next/image";
import React from "react";
import EmployeeItem from "../components/employee-item";

export default function aboutus() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-primary text-white to-secondary py-10 max-w-screen-xl mx-auto px-5 space-y-3 flex flex-col items-start xl:px-10">
        <p
          data-aos="fade-right"
          className="py-2 px-4 bg-white text-primary rounded-lg text-sm font-semibold"
        >
          Over ons
        </p>
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="font-extrabold text-2xl md:text-4xl"
        >
          Een bedrijf dat jou kan helpen bij allerhande IT problemen. Van het maken van een computer
          tot het programmeren van een oplossing voor jouw business.
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto relative hidden md:block">
        <Image src="/team.jpg" layout="intrinsic" width={1280} height={384} objectFit="cover" />
      </div>
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0 pt-20">
        <h1 className="font-bold text-2xl sm:text-4xl">Een divers team van IT'ers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-10">
          <div data-aos="zoom-in">
            <EmployeeItem image="/testimonial1.jpg" position="CEO" name="Steve Jobs" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="100">
            <EmployeeItem image="/testimonial2.jpg" position=".NET Developer" name="Bill Gates" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="150">
            <EmployeeItem image="/testimonial3.jpg" position="Service Desk" name="Elon Musk" />
          </div>
        </div>
      </div>
    </div>
  );
}

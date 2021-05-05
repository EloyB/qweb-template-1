import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import CustomInput from "../components/custom-input";
import CustomButton from "../components/custom-button";

export default function contact() {
  const services = ["PC reparatie", "Tech support", "Coderen", "Andere"];
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-primary text-white to-secondary py-10 max-w-screen-xl mx-auto px-5 space-y-3 flex flex-col items-start xl:px-10">
        <p className="py-2 px-4 bg-white text-primary rounded-lg text-sm font-semibold">Contact</p>
        <h1 className="font-extrabold text-2xl md:text-4xl">
          Heb je antwoorden nodig op je vragen of heb je intresse in 1 van onze services? Geef ons
          een seintje en wij helpen jou graag verder.
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 space-y-10 xl:px-0 pt-20">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-2xl sm:text-4xl">Bereikbaar via verschillende kanalen</h1>
          <p className="sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 p-5 rounded-lg cursor-pointer hover:bg-primary hover:bg-opacity-10">
            <HiLocationMarker className="h-10 w-10 text-primary" />
            <p className="font-semibold">Some Address 123, Antwerp</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-5 rounded-lg cursor-pointer hover:bg-primary hover:bg-opacity-10">
            <ImPhone className="h-10 w-10 text-primary" />
            <p className="font-semibold">+32 123 45 67 89</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-5 rounded-lg cursor-pointer hover:bg-primary hover:bg-opacity-10">
            <HiMail className="h-10 w-10 text-primary" />
            <p className="font-semibold">some-email@company.com</p>
          </div>
        </div>
        <div className="flex flex-col md:items-center space-y-10">
          <div className="w-full space-y-5 md:space-y-0 md:flex md:space-x-10">
            <div className="flex-1 space-y-5">
              <CustomInput placeholder="Name" />
              <CustomInput placeholder="Email" />
              <CustomInput placeholder="Phone" />
              <div className="space-y-2">
                <p className="text-gray-700 font-semibold text-sm">Service:</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer text-center text-primary text-sm font-bold rounded-lg py-2 bg-primary bg-opacity-10"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 md:flex md:flex-col space-y-2">
              <p className="text-gray-700 font-semibold text-sm">Message:</p>
              <textarea
                placeholder="Message"
                className="w-full h-60 py-3 px-4 rounded-lg border-2 border-gray-100 resize-none flex-1 focus:outline-none focus:border-primary focus:border-opacity-50"
              ></textarea>
            </div>
          </div>
          <CustomButton size="xl" type="primary" text="Verstuur" />
        </div>
      </div>
    </div>
  );
}

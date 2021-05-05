import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiWrench, BiSupport } from "react-icons/bi";
import ServiceBlock from "../components/service-block";
import CustomButton from "../components/custom-button";
import { useRef } from "react";
import TestimonialItem from "../components/testimonial-item";

export default function Home() {
  const startRef = useRef();
  return (
    <div className="w-full">
      <div className="w-full relative">
        <div className="max-w-screen-xl pt-20 h-screen mx-auto flex flex-col justify-end md:flex-row md:items-center md:justify-start">
          <div data-aos="fade-right" className="space-y-4 px-5 pb-10 md:w-1/2 xl:pl-0">
            <h1 className="font-bold text-4xl sm:text-5xl">Another IT Company</h1>
            <p className="sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium
              a pharetra, feugiat cursus.
            </p>
            <CustomButton
              type="primary"
              text="Leer ons kennen"
              onClick={() => startRef.current.scrollIntoView({ behavior: "smooth" })}
            />
          </div>
          <div
            data-aos="fade-left"
            className="relative h-1/2 md:h-full md:w-1/2 md:absolute md:right-0 md:top-0"
          >
            <Image src="/header.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <div ref={startRef} className="max-w-screen-xl mx-auto px-5 xl:px-0 pt-32 space-y-14">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-2xl sm:text-4xl">
            SOLIT helpt je bij allerhande IT problemen
          </h1>
          <p className="sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          <ServiceBlock
            data-aos="fade-up"
            title="PC reparatie"
            icon={<BiWrench className="w-14 h-14 text-primary" />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceBlock
            title="Tech support"
            icon={<BiSupport className="w-14 h-14 text-primary" />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceBlock
            title="Coderen"
            icon={<HiOutlineDesktopComputer className="w-14 h-14 text-primary" />}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pt-32 space-y-10 md:space-y-0 md:flex md:items-center">
        <Image src="/header.jpg" layout="intrinsic" width={640} height={640} objectFit="cover" />
        <div className="px-5 space-y-10 xl:pl-20">
          <h1 className="font-bold text-2xl sm:text-4xl">Wij hebben het allemaal</h1>
          <div className="space-y-5">
            <div data-aos="fade-left" className="space-y-2">
              <h1 className="font-bold text-xl sm:text-2xl">24/7 support</h1>
              <p className="sm:text-lg md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div data-aos="fade-left" className="pt-5 space-y-2">
              <h1 className="font-bold text-xl sm:text-2xl">Snelle servicedesk</h1>
              <p className="sm:text-lg md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div data-aos="fade-left" className="pt-5 space-y-2">
              <h1 className="font-bold text-xl sm:text-2xl">Een hoop top programmeurs</h1>
              <p className="sm:text-lg md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary to-secondary py-16 mt-32">
        <div className="max-w-screen-xl mx-auto px-5 xl:px-0 text-center text-white space-y-4">
          <h1 className="font-bold text-2xl md:text-3xl">Vertrouwd door vele bedrijven</h1>
          <p className="sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a
            pharetra, feugiat cursus.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10">
            <div
              data-aos="zoom-in"
              className="w-full bg-white rounded-lg py-10 cursor-pointer"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="w-full bg-white rounded-lg py-10 cursor-pointer"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="w-full bg-white rounded-lg py-10 cursor-pointer"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="w-full bg-white rounded-lg py-10 cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-5 xl:px-0 pt-32 space-y-8">
        <h1 className="font-bold text-2xl sm:text-4xl">Wat onze klanten zeggen over SOLIT</h1>
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:items-start md:space-x-5">
          <div data-aos="zoom-in" className="flex-1">
            <TestimonialItem
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium
              a pharetra, feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus."
              image="/testimonial1.jpg"
              position="Klant van ons"
              name="Jane Doe"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" className="flex-1">
            <TestimonialItem
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium
              a pharetra, feugiat cursus. Lorem ipsum dolor sit amet."
              image="/testimonial2.jpg"
              position="CEO van Iets"
              name="John Doe"
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" className="flex-1">
            <TestimonialItem
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium
              a pharetra, feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="/testimonial3.jpg"
              position="Medewerker van FooBar"
              name="Hans Zimmer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

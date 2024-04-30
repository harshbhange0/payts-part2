import Image from "next/image";
import React from "react";
import heroImg from "/public/home-hero-mobile.webp";

export default function HeroSection() {
  console.log(heroImg);

  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-y-2 px-5 transition-all duration-200 ease-in md:flex-row md:px-20">
      <div className=" flex w-full flex-col justify-start gap-y-3 ps-0 md:w-1/2 md:ps-[10%]">
        <h2 className=" text-6xl">
          Fast, safe
          <br />
          social
          <br />
          payments
          <br />
        </h2>
        <p className="text-sm text-gray-400">
          <span>
            Pay, get paid, grow a business, and more. Join{" "}
            <br className="hidden md:block" />
            the tens of millions of people on Venmo.
          </span>
        </p>
      </div>
      <div className="flex w-full flex-col justify-center gap-y-3 md:w-1/2">
        <div className="w-full overflow-hidden rounded-3xl shadow-md ">
          <Image alt="" src={heroImg} />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import heroImg from "/public/home-hero-mobile.webp";
import TextReveal from "@/components/magicui/text-reveal";
import { MagicCard, MagicContainer } from "./magicui/magic-card";

export default function HeroSection() {


  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-y-2 px-5 transition-all duration-200 ease-in md:flex-row md:px-20">
      <div className="flex md:hidden"></div>
      <div className="z-10 hidden min-h-[calc(16rem-80px)] flex-col items-center justify-center rounded-lg bg-transparent  dark:bg-black md:flex">
        <TextReveal text="Fast, safe and social payments" />
      </div>
      <div className="flex w-full flex-col justify-center gap-y-3 md:w-1/2">
        <MagicContainer className="w-full  rounded-2xl shadow-md">
          <MagicCard
            borderwidth={5}
            className="MagicCard flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-[0.05rem] shadow-2xl"
          >
            <Image alt="hero img" className="rounded-2xl" src={heroImg} />
          </MagicCard>
        </MagicContainer>
      </div>
    </div>
  );
}

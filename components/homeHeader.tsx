import React from "react";
import Link from "next/link";
import Logo from "../public/venmo.svg";
import Logo2 from "../public/v.svg";

import Image from "next/image";
import { Button } from "./ui/button";

export default function HomeHeader() {
  return (
    <nav className="flex items-center justify-between px-5 py-3 md:px-10 md:py-5">
      <div className="h-3 md:h-5">
        <Image className="h-full w-full" src={Logo} alt="logo" />
      </div>
      <div className="flex items-center justify-between gap-3">
        <Link href={"/auth/login"}>Log in</Link>
        <Button className="flex items-center gap-2 rounded-full border border-black/50 bg-transparent text-black hover:bg-white ">
          <Image className="h-3 w-3 md:h-4 md:w-4 " src={Logo2} alt="logo" />
          <span>Get Demo</span>
        </Button>
      </div>
    </nav>
  );
}

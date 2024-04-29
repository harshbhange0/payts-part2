import { PasswordInput } from "@/components/passwordInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";

export default function LogIn() {
  return (
    <div className=" flex h-screen w-full items-center justify-center">
      <Card className="min-w-[400px] py-10">
        <CardHeader>
          <CardTitle className="text-center font-normal">Log In</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 px-10">
          <Input
            placeholder="enter email,mobile or username"
            className=" focus-visible:outline-blue-300"
          />
          <PasswordInput
            placeholder="enter password"
            className=" focus-visible:outline-blue-300"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-5 px-10">
          <Button className="w-full rounded-full border border-blue-300 bg-white text-blue-400 hover:bg-blue-400  hover:text-white">
            Log in
          </Button>
          <div className=" flex w-full flex-row items-center justify-center gap-2">
            <span>Don't Have an account?</span>
            <Link className="text-blue-600 underline" href={"/auth/register"}>
              Register{" "}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

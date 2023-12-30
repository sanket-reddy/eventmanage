import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Appbar = () => {
  return (
    <div>
      <nav className="flex w-full p-2 bg-violet-200 justify-between items-center ">
        <div>
          <h1 className="text-3xl">Event-Up</h1>
        </div>
        <div className=" hidden sm:flex space-x-4 ">
          <div className=" hover:text-blue-800">
            <Link href="/home">Home</Link>
          </div>
          <div className=" hover:text-blue-800">
            <Link href="/About">About</Link>
          </div>
          <div className=" hover:text-blue-800">
            <Link href="/More">MORE </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="default" className="mt-0 bg-blue-800 px-7">
            Login
          </Button>
          <Sheet>
            <SheetTrigger className="mx-4 sm:hidden">
              <Image
                src="/menu.png"
                alt="menu logo"
                width={40}
                height={60}
              ></Image>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-3xl">Event Up</SheetTitle>
                <Separator />
                <SheetDescription className="flex flex-col space-y-3 ">
                  <Link href="/Home" className="text-lg text-black">
                    Home
                  </Link>
                  <Link href="/About" className="text-lg text-black">
                    About
                  </Link>
                  <Link href="/More" className="text-lg text-black">
                    More
                  </Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;

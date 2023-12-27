import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Appbar = () => {
  return (
    <div>
      <nav className="flex w-full p-3 bg-violet-200 justify-between items-center ">
        <div>
          <h1 className="text-2xl">SITE-1</h1>
        </div>
        <div className="flex space-x-4 ">
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
        <Button
          variant="secondary"
          className="bg-blue-500 rounded-full mr-3 hover:bg-cyan-400"
        >
          click here
        </Button>
      </nav>
    </div>
  );
};

export default Appbar;

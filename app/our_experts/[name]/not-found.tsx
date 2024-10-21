import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      <div className="chess-board"></div>
      <div className="text-white flex items-end gap-[10px] z-10">
        <h1 className="text-xl md:text-3xl font-semibold font-sans">404</h1>
        <p className="text-xl md:text-3xl">|</p>
        <p className="pb-1 md:pb-2 text-sm md:text-md text-zinc-300">
          This page could not be found.
        </p>
      </div>
      <div className="mt-5 z-[10]">
        <div className="text-white flex items-end gap-[10px] z-10 bg-blue-600 px-4 py-2 rounded-lg">
          <Link
            href={"/our_experts"}
            className="text-xl md:text-3xl font-semibold font-sans custom-pointer"
          >
            <h1>Go back to Page</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

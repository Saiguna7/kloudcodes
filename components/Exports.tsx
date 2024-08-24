import Link from "next/link";
import React from "react";
import Members from "./Members";
const Exports = () => {
  return (
    <div className="relative w-full">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute md:-bottom-96 -bottom-72 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <section className=" w-full  h-[300px] overflow-hidden ">
        <div className="flex w-full h-full  bg-[url('/images/bg2.jpg')]  items-center justify-center">
          <div
            className="w-[350px]  md:w-[500px] lg:min-h-[100px] lg:w-[800px] px-4 py-4 rounded-lg shadow-lg 
            bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg"
          >
            <p className="text-white font-semibold text-sm lg:text-lg">
              At KLOUDCODES, we believe that our people are our greatest asset.
              Our team of experts is composed of seasoned professionals who
              excel in their respective fields, each bringing a unique set of
              skills and perspectives that drive innovation and success.
              Together, they form a collaborative force, dedicated to pushing
              the boundaries of what&apos;s possible and delivering outstanding
              results for our clients. Below, we introduce you to the key
              players who make it all happen:
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mx-[10px] mt-[20px] mb-[10px]">
        <div className="flex max-md:flex-col w-full md:justify-between space-y-4 text-white md:px-[60px]">
          <h1 className="text-3xl font-semibold md:text-4xl">Our Experts</h1>
          <Link
            href={"/#contact"}
            className="custom-pointer flex items-center gap-[10px] group"
          >
            <h1 className="font-bold text-sm md:text-lg">Contact us</h1>
            <p className="group-hover:bg-purple-800 group-hover:translate-x-1 group-hover:transition-all duration-500 ease-in-out bg-purple-600 text-white font-semibold px-[3px] md:px-2 md:py-[1px]">
              {">"}
            </p>
          </Link>
        </div>
        <div className="flex  lg:gap-[200px] max-lg:flex-col  gap-[10px] mt-[30px] md:px-[60px]">
          <Members
            image="/images/saiguna.jpg"
            imageName="saiguna"
            name="V. Saiguna"
            work="Full Stack Developer & Manging"
            linkedin="https://www.linkedin.com/in/sai-guna-vanam-817404251/"
            redirect="sai-guna"
          />
          <Members
            image="/images/shravan.jpg"
            imageName="shravan"
            name="N. Shravan kumar"
            work="Java Full Stack Developer & Manging"
            linkedin="https://www.linkedin.com/in/shravan-nagapuri-46803a16b/"
            redirect="shravan-kumar"
          />
          <Members
            image="/images/sandeep.jpg"
            imageName="sandeep"
            name="Sandeep"
            work="Graphic Designer"
            redirect="sandeep"
          />
        </div>
      </section>
    </div>
  );
};

export default Exports;

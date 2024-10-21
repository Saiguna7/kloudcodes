import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  lead: string;
  name: string;
  designation: string;
  image: string;
  imageName: string;
  about: string;
  linkedin?: string;
  p1: string;
  p2: string;
  p3: string;
};

const Member = async ({
  lead,
  name,
  designation,
  image,
  imageName,
  about,
  linkedin,
  p1,
  p2,
  p3,
}: Props) => {
  const imageBlur = await fetch("https://github.com/shadcn.png")
    .then((res) => res.arrayBuffer())
    .then((buffer) => Buffer.from(buffer).toString("base64"));
  return (
    <div className="w-full min-h-screen mt-[5.5rem] mb-[40px]">
      <div className="relative w-full">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute md:-bottom-96 -bottom-72 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <section className="w-full  mt-[30px] mx-[10px] lg:mt-[50px] lg:mx-[80px] text-white">
          <h1
            className="pb-[24px] lg:pb-[12px] uppercase text-[12px] lg:text-[16px] font-medium"
            data-aos="fade-right"
            ata-aos-duration="3000"
          >
            {lead}
          </h1>
          <h1
            className="font-medium text-[32px] lg:text-[64px]"
            data-aos="fade-left"
            ata-aos-duration="3000"
          >
            {name}
          </h1>
          <h1
            className="font-light text-[20px] lg:[30px] pt-[16px] lg:pt-[34px]"
            data-aos="fade-up"
            ata-aos-duration="3000"
          >
            {designation}
          </h1>
          <div className="pt-[24px] lg:pt-[130px] flex max-md:flex-col gap-[20px]  lg:gap-[150px]">
            <div data-aos="fade-right" ata-aos-duration="4000">
              {imageName === "saiguna" && (
                <Image
                  src={image}
                  alt={imageName}
                  width={1000}
                  height={500}
                  priority
                  quality={100}
                  className="lg:w-[1000px] lg:h-[500px] max-lg:w-[1500px] max-sm:w-[350px] h-[500px] object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/png;base64,${imageBlur}`}
                />
              )}
              {imageName === "shravan" && (
                <Image
                  src={image}
                  alt={imageName}
                  width={1000}
                  height={500}
                  priority
                  quality={100}
                  className="lg:w-[1000px] lg:h-[500px] max-lg:w-[1500px] max-sm:w-[350px] h-[500px] object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/png;base64,${imageBlur}`}
                />
              )}
              {imageName === "sandeep" && (
                <Image
                  src={image}
                  alt={imageName}
                  width={1500}
                  height={500}
                  priority
                  quality={100}
                  className="lg:w-[1500px] lg:h-[500px] max-lg:w-[1500px] max-sm:w-[350px] h-[400px] object-cover"
                  placeholder="blur"
                  blurDataURL={`data:image/png;base64,${imageBlur}`}
                />
              )}
            </div>
            <div className="flex flex-col pr-[15px] lg:pr-[140px]">
              <p
                className="hidden md:block bg-purple-700 h-[4px] w-[32px] mb-[24px] font-medium"
                data-aos="fade-down"
                ata-aos-duration="4000"
              ></p>
              <div className="flex flex-col">
                <h1
                  className="text-[28px] lg:text-[52px] font-semibold"
                  data-aos="fade-right"
                  ata-aos-duration="4000"
                >
                  About {about}
                </h1>
                <p
                  className="mt-[15px] md:mt-[48px] font-[400] text-[14px] lg:text-[17px]"
                  data-aos="fade-left"
                  ata-aos-duration="4000"
                >
                  {linkedin ? (
                    <Link
                      href={linkedin as string}
                      target="_blank"
                      className="custom-pointer hover:text-purple-300 text-[rgb(162,162,168)] underline leading-[25px]"
                    >
                      {name}
                    </Link>
                  ) : (
                    `${name}`
                  )}{" "}
                  {p1}
                </p>
                <p
                  className="mt-[10px] md:mt-[24px] font-[400] text-[14px] lg:text-[17px]"
                  data-aos="fade-left"
                  ata-aos-duration="4000"
                >
                  {p2}
                </p>
                <p
                  className="mt-[10px] md:mt-[24px] font-[400] text-[14px] lg:text-[17px]"
                  data-aos="fade-left"
                  ata-aos-duration="4000"
                >
                  {p3}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Member;

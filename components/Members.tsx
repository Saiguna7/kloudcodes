import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
type Props = {
  image: string;
  imageName: string;
  name: string;
  work: string;
  linkedin?: string;
  redirect: string;
};
const Members = ({
  image,
  imageName,
  name,
  work,
  linkedin,
  redirect,
}: Props) => {
  return (
    <div className="flex text-white gap-[20px]">
      {imageName === "saiguna" && (
        <div className="h-[140px] w-[130px] overflow-hidden bg-white">
          <Image
            priority
            src={image}
            alt={imageName}
            width={130}
            height={180}
            layout="responsive"
          />
        </div>
      )}
      {imageName === "shravan" && (
        <div className="h-[140px] w-[130px] lg:w-[120px] overflow-hidden bg-white">
          <Image
            priority
            src={image}
            alt={imageName}
            width={120}
            height={180}
            layout="responsive"
          />
        </div>
      )}
      {imageName === "sandeep" && (
        <div className="h-[140px] w-[130px] lg:w-[150px] overflow-hidden bg-white">
          <Image
            priority
            src={image}
            alt={imageName}
            width={150}
            height={180}
            layout="responsive"
          />
        </div>
      )}
      <div className="flex flex-col h-full">
        <div className="flex-grow space-y-2 sm:space-y-3">
          <h1 className="font-semibold text-[16px] md:text-lg lg:text-[22px]">
            {name}
          </h1>
          <p className="text-[12px] lg:text-[14px] text-zinc-300">{work}</p>
          {linkedin ? (
            <Link
              href={linkedin as string}
              target="_blank"
              className="custom-pointer hover:text-zinc-400 w-[30px] flex"
            >
              <IoLogoLinkedin className="text-[20px] md:text-[22px]" />
            </Link>
          ) : (
            ""
          )}
        </div>
        <Link
          href={`/our_experts/${redirect}`}
          className="flex items-center w-[100px] gap-[12px] custom-pointer mt-4 sm:mt-auto"
        >
          <div className="flex items-center gap-[12px] group">
            <h1
              className="text-[14px] font-medium md:text-[18px] relative 
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] 
          after:w-full after:h-[1px] after:bg-white after:origin-bottom-left
          after:transition-transform after:duration-500 after:ease-out
          after:scale-x-0 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left"
            >
              Read Bio
            </h1>
            <p className="text-[14px] font-medium md:text-[18px]">{">"}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Members;

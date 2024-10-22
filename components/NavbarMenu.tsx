"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaChevronDown } from "react-icons/fa";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLink from "./NavLink";

import Link from "next/link";
import Image from "next/legacy/image";
import { useState } from "react";

type NavLink = {
  title: string;
  path?: string;
  dropdown?: {
    title: string;
    path: string;
  }[];
};
type Prop = {
  href: string;
  title: string;
};
type Prop1 = {
  title: string;
  dropdown: {
    title: string;
    path: string;
  }[];
};
const NLink = ({ href, title }: Prop) => {
  return (
    <>
      <SheetClose asChild>
        <Link
          href={href}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-xl rounded md:p-0 hover:text-white custom-pointer"
        >
          {title}
        </Link>
      </SheetClose>
    </>
  );
};
const Dropdown = ({ title, dropdown }: Prop1) => {
  const [expand, setexpand] = useState<boolean>(false);
  return (
    <div>
      {title === "Contact" ? (
        <>
          <button
            className="bg-[#121212] z-[-999]  text-[rgb(173,183,190)] text-xl flex items-center justify-center gap-4"
            onClick={() => setexpand(!expand)}
          >
            {title}
            <FaChevronDown
              className={`${expand ? "rotate-180 text-[10px]" : "text-[10px]"}`}
            />
          </button>
          {expand && (
            <>
              <div className="bg-[#102039] rounded-xl">
                <div className="flex  flex-col  mt-2  gap-2 ">
                  {dropdown?.map((item, index) => (
                    <SheetClose key={index} asChild>
                      <Link
                        href={item.path}
                        className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-md  rounded  hover:text-white custom-pointer z-[999]"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <button
            className="bg-[#121212] flex items-center justify-center gap-4  text-[rgb(173,183,190)] text-xl"
            onClick={() => setexpand(!expand)}
          >
            {title}
            <FaChevronDown
              className={`${expand ? "rotate-180 text-[10px]" : "text-[10px]"}`}
            />
          </button>
          {expand && (
            <>
              <div className="bg-[#102039] rounded-xl">
                <div className="flex  flex-col  mt-2 gap-2 ">
                  {dropdown?.map((item, index) => (
                    <SheetClose key={index} asChild>
                      <Link
                        href={item.path}
                        className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-md  rounded  hover:text-white custom-pointer z-[999]"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default function NavbarButton({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <>
      <Sheet>
        <SheetTrigger
          className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white custom-pointer"
          title="Open Menu"
        >
          <Bars3Icon className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-[#33353F] bg-[#121212] w-[300px] md:hidden
          text-white
          "
        >
          <div className="flex items-center justify-between">
            <Link
              href={"/"}
              className="text-2xl md:text-5xl text-white font-semibold custom-pointer"
            >
              <Image
                src="/images/logo.png"
                width={150}
                height={50}
                alt="logo"
                quality={100}
                priority
              />
            </Link>
          </div>
          <ul className="flex flex-col py-4 items-center justify-center">
            {navLinks.map((link, index) => {
              if (index === 0 && !link.dropdown) {
                return (
                  <li key={index}>
                    <NLink //@ts-ignore
                      href={link.path}
                      title={link.title}
                    />
                  </li>
                );
              } else if (index === 1 && link.dropdown) {
                return (
                  <li key={index}>
                    <Dropdown title={link.title} dropdown={link.dropdown} />
                  </li>
                );
              } else if (index === 2 && !link.dropdown) {
                return (
                  <li key={index}>
                    <NLink //@ts-ignore
                      href={link.path}
                      title={link.title}
                    />
                  </li>
                );
              } else if (index === 3 && link.dropdown) {
                return (
                  <li key={index}>
                    <Dropdown title={link.title} dropdown={link.dropdown} />
                  </li>
                );
              }
              return null; // Return null for any other cases.
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

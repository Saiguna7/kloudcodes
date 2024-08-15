"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
type NavLink = {
  title: string;
  path: string;
};
type Prop = {
  href: string;
  title: string;
};
const NLink = ({ href, title }: Prop) => {
  return (
    <>
      <SheetClose asChild>
        <Link
          href={href}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white custom-pointer"
        >
          {title}
        </Link>
      </SheetClose>
    </>
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
          <ul className="flex flex-col py-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

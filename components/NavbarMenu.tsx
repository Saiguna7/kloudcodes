"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/legacy/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          {title === "Contact" ? (
            <>
              <NavigationMenuTrigger className="bg-[#121212] z-[-999]  text-[rgb(173,183,190)] text-xl">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212]">
                <NavigationMenuLink className="flex  flex-col  w-[160px] gap-3 p-4 z-[999]">
                  {dropdown?.map((item, index) => (
                    <SheetClose key={index} asChild className="z-[999]">
                      <Link
                        href={item.path}
                        className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-md  rounded  hover:text-white custom-pointer z-[999]"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </NavigationMenuLink>
              </NavigationMenuContent>
            </>
          ) : (
            <>
              <NavigationMenuTrigger className="bg-[#121212]  text-[rgb(173,183,190)] text-xl ">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212]">
                <NavigationMenuLink className="flex  flex-col  w-[200px] gap-3 p-4 z-[999]">
                  {dropdown?.map((item, index) => (
                    <SheetClose key={index} asChild className="z-[999]">
                      <Link
                        href={item.path}
                        className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-md  rounded  hover:text-white custom-pointer z-[999]"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </NavigationMenuLink>
              </NavigationMenuContent>
            </>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
            {navLinks.map((link, index) =>
              index <= 0 && !link.dropdown ? (
                <>
                  <li key={index}>
                    <NLink //@ts-ignore
                      href={link.path}
                      title={link.title}
                    />
                  </li>
                </>
              ) : index === 1 && link.dropdown ? (
                <li key={index}>
                  <Dropdown
                    key={index}
                    title={link.title}
                    dropdown={link.dropdown}
                  />
                </li>
              ) : index === 2 && !link.dropdown ? (
                <li key={index}>
                  <NLink //@ts-ignore
                    href={link.path}
                    title={link.title}
                  />
                </li>
              ) : (
                index === 3 &&
                link.dropdown && (
                  <Dropdown
                    key={index}
                    title={link.title}
                    dropdown={link.dropdown}
                  />
                )
              )
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}

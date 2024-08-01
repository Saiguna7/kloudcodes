import Link from "next/link";

import NavLink from "./NavLink";

import Image from "next/image";
import NavbarButton from "./NavbarButton";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Our Services",
    path: "#services",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
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
        <div className="mobile-menu block md:hidden">
          <NavbarButton navLinks={navLinks} />
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

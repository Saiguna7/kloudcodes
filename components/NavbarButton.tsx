"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
type NavLink = {
  title: string;
  path: string;
};
export default function NavbarButton({ navLinks }: { navLinks: NavLink[] }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <button
        onClick={toggleNavbar}
        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white custom-pointer"
        title="Open Menu"
      >
        {!navbarOpen ? (
          <Bars3Icon className="h-5 w-5" />
        ) : (
          <XMarkIcon className="h-5 w-5" />
        )}
      </button>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </>
  );
}

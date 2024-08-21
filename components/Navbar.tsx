import Link from "next/link";

import NavLink from "./NavLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Our Services",
    dropdown: [
      {
        title: "Our Services",
        path: "#services",
      },
      {
        title: "Web development",
        path: "/development",
      },
      {
        title: "Web application",
        path: "/web",
      },
      {
        title: "Marketing",
        path: "/marketing",
      },
      {
        title: "Services",
        path: "/services",
      },
    ],
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    dropdown: [
      {
        title: "Contact",
        path: "/#contact",
      },
      {
        title: "Our Experts",
        path: "/our_experts",
      },
    ],
  },
];
type Prop1 = {
  title: string;
  dropdown: {
    title: string;
    path: string;
  }[];
};
const Drop = ({ title, dropdown }: Prop1) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {title === "Contact" ? (
            <>
              <NavigationMenuTrigger className="bg-transparent text-[rgb(173,183,190)] sm:text-xl max-md:mr-20">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212]">
                <NavigationMenuLink className="flex  flex-col  w-[100px] gap-3 p-4 md:w-[135px] lg:w-[150px] ">
                  {dropdown?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-lg lg:text-xl rounded md:p-0 hover:text-white custom-pointer"
                    >
                      {item.title}
                    </Link>
                  ))}
                </NavigationMenuLink>
              </NavigationMenuContent>
            </>
          ) : (
            <>
              <NavigationMenuTrigger className="bg-transparent text-[rgb(173,183,190)] sm:text-xl max-md:mr-20">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212]">
                <NavigationMenuLink className="lg:items-center grid grid-cols-2 grid-rows-3 gap-[10px]   w-[200px]  p-4 md:w-[400px]">
                  {dropdown?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="py-2 pl-3 pr-4 text-[rgb(173,183,190)] text-lg lg:text-xl rounded md:p-0 hover:text-white custom-pointer"
                    >
                      {item.title}
                    </Link>
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
        <div className="mobile-menu block md:hidden relative">
          <NavbarMenu navLinks={navLinks} />
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) =>
              index <= 0 && !link.dropdown ? (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ) : index === 1 && link.dropdown ? (
                <Drop key={index} title={link.title} dropdown={link.dropdown} />
              ) : index === 2 && !link.dropdown ? (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ) : (
                index === 3 &&
                link.dropdown && (
                  <Drop
                    key={index}
                    title={link.title}
                    dropdown={link.dropdown}
                  />
                )
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

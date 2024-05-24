"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menu from "@/../public/menu.png";
import Logout from "@/components/logout/Logout";

const NavLinks = ({ isSession, isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // conditional nav links
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    //{ title: "Test", path: "/test" }, //! temporary
  ];
  if (isAdmin) {
    links.push({ title: "Admin", path: "/admin" });
  }
  if (isSession) {
    links.push({ title: "Create New", path: "/create-post" });
  }

  if (!isSession) {
    links.push({ title: "Login", path: "/login" });
  }

  return (
    <section>
      {/* large display nav */}
      <nav className="hidden xl:flex justify-between items-center gap-1">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`rounded-full px-2 py-1 ${
              link.path == pathname && "bg-foreground text-background"
            }`}
          >
            {link.title}
          </Link>
        ))}
        {isSession && <Logout />}
      </nav>
      {/* mobile display nav */}
      <div className="absolute top-3 right-0 flex xl:hidden flex-col justify-center gap-3">
        <button
          className="rounded-md px-2 py-1 h-10 w-10 ms-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={menu} alt="menu" className="" />
        </button>
        {isOpen && (
          <nav className="min-h-[calc(100vh-4rem)] py-5 px-20 flex flex-col justify-center items-center gap-3 bg-secondary-background bg-opacity-50 rounded">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.title}
                className={`rounded-full px-2 py-1 ${
                  link.path == pathname && "bg-foreground text-background"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.title}
              </Link>
            ))}
            {isSession && <Logout />}
          </nav>
        )}
      </div>
    </section>
  );
};
export default NavLinks;

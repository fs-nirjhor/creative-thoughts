"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menu from "@/../public/menu.png";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  //! Temporary
  const isSession = true;
  const isAdmin = true;

  // conditional nav links
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  if (isAdmin) {
    links.push({ title: "Admin", path: "/admin" });
  }
  if (!isSession) {
    links.push({ title: "Login", path: "/login" });
  }
  // styles

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
        {isSession && (
          <Link
            href="/logout"
            className="rounded-md px-2 py-1 bg-foreground text-background"
          >
            Logout
          </Link>
        )}
      </nav>
      {/* mobile display nav */}
      <div className="absolute top-3 right-0 flex xl:hidden flex-col justify-center gap-3">
        <button
          className="rounded-md px-2 py-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={menu} alt="menu" className="h-5 w-6 ms-auto" />
        </button>
        {isOpen && (
          <nav className="min-h-[calc(100vh-4rem)] py-5 px-20 flex flex-col items-center gap-3 bg-secondary-background rounded">
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
            {isSession && (
              <Link
                href="/logout"
                className="rounded-md px-2 py-1 bg-foreground text-background"
                onClick={() => setIsOpen(!isOpen)}
              >
                Logout
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
};
export default NavLinks;

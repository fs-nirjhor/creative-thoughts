"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    // { title: "Login", path: "/login" },
  ];
  return (
    <nav className="flex justify-between items-center">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`rounded-full px-3 py-1 ${
            link.path == pathname
              ? "bg-foreground text-background"
              : "text-foreground bg-background"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
export default NavLinks;

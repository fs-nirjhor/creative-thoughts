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
  ];
  //! Temporary
  const isSession = true;
  const isAdmin = true;

  if (isAdmin) {
    links.push({ title: "Admin", path: "/admin" });
  }
  if (!isSession) {
    links.push({ title: "Login", path: "/login" });
  }
  if (isSession) {
    links.push({ title: "Logout", path: "/logout" });
  }
  return (
    <nav className="flex justify-between items-center">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`rounded-full px-2 py-1 ${
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

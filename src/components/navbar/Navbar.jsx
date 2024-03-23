import NavLinks from "@/components/navbar/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky bg-transparent backdrop-blur-3xl top-0 z-50 flex justify-between gap-5 p-3 mb-3">
      <Link href="/" className="text-xl font-bold">
        FSN
      </Link>
      <NavLinks className="relative" />
    </header>
  );
};
export default Navbar;

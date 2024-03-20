import NavLinks from "@/components/navbar/NavLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="relative flex justify-between gap-5 py-3">
      <Link href="/" className="text-xl font-bold">
        FSN
      </Link>
      <NavLinks />
    </header>
  );
};
export default Navbar;

import NavLinks from "@/components/navbar/NavLinks";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Suspense } from "react";

const Navbar = async () => {
  const session = await auth();

  //! Temporary
  const isAdmin = true;

  return (
    <header className="sticky bg-transparent backdrop-blur-3xl top-0 z-50 flex justify-between gap-5 p-3 mb-3">
      <Link href="/" className="text-xl font-bold">
        FSN
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
      <NavLinks className="relative" isSession={!!session} isAdmin={isAdmin} />
      </Suspense>
    </header>
  );
};
export default Navbar;

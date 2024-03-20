import NavLinks from "@/components/navbar/NavLinks";

const Navbar = () => {
  return (
    <header className="relative flex justify-between gap-5 py-3">
      <div className="text-xl font-bold">FSN</div>
      <NavLinks />
    </header>
  );
};
export default Navbar;

import NavLinks from "@/components/navbar/NavLinks";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-12">
      <div className="text-xl font-bold">FSN</div>
      <NavLinks />
    </header>
  );
};
export default Navbar;

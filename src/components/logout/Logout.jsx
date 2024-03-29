import { handleLogout } from "@/lib/action";

const Logout = () => {
  return (
    <form action={handleLogout}>
      <button className="rounded-md px-2 py-1 bg-foreground text-background">
        Logout
      </button>
    </form>
  );
};
export default Logout;

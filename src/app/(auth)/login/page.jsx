import { handleLoginWithGithub } from "@/lib/action";

const LoginPage = () => {
  return (
    <main>
      <form action={handleLoginWithGithub} className="max-w-sm mx-auto">
        <button className="py-2 px-3 rounded hover:opacity-50 bg-black text-white">
          Login With Github
        </button>
      </form>
    </main>
  );
};
export default LoginPage;

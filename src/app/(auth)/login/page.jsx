import { handleLoginWithGithub } from "@/lib/action";
import Link from "next/link";

const LoginPage = () => {
  const inputClass =
    "focus:border-2 border-foreground rounded bg-slate-800 p-2 w-full";
  return (
    <main className="flex flex-col gap-5 justify-center items-center max-w-md mx-auto">
      <h1 className="text-2xl text-center mb-5">Login</h1>
      <form action={handleLoginWithGithub}>
        <button className="py-2 px-3 rounded hover:opacity-50 bg-black text-white text-center">
          Login With Github
        </button>
      </form>
      <form className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          className={inputClass}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          className={inputClass}
          placeholder="Password"
          required
        />
        <button className="bg-blue-700 py-2 px-3 rounded hover:opacity-50 mt-2">
          Login
        </button>
      </form>
      <Link href="/register">Don&apos;t have an account?</Link>
    </main>
  );
};
export default LoginPage;

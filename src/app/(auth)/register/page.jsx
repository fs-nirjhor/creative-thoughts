import { handleRegistration } from "@/lib/action";
import Link from "next/link";

const RegisterPage = () => {
  const inputClass =
    "focus:border-2 border-foreground rounded bg-slate-800 p-2 w-full";
  return (
    <main className="max-w-md mx-auto">
      <h1 className="text-2xl text-center mb-5">Register</h1>
      <form action={handleRegistration} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          className={inputClass}
          placeholder="Username"
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          className={inputClass}
          placeholder="Confirm password"
          required
        />
        <button className="bg-blue-700 py-2 px-3 rounded hover:opacity-50 mt-2">
          Register
        </button>
      </form>
      <Link href="/login" className="text-center mt-3 block">
        Already have an account?
      </Link>
    </main>
  );
};
export default RegisterPage;

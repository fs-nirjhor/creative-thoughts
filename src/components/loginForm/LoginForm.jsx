"use client";

import { handleLogin } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(handleLogin, null);
  const router = useRouter();
  // navigate to home page after login
  useEffect(() => {
    state?.data && router.push("/");
  }, [state?.data, router]);

  // style
  const inputClass =
    "focus:border-2 border-foreground rounded bg-slate-800 p-2 w-full";
  return (
    <form action={formAction} className="flex flex-col gap-3">
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
      {state?.error && (
        <label className="text-red-500 text-center grow-0">
          {state?.error}
        </label>
      )}
      <button className="bg-blue-700 py-2 px-3 rounded hover:opacity-50 mt-2">
        Login
      </button>
    </form>
  );
};
export default LoginForm;

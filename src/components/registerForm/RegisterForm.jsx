"use client";

import { handleRegistration } from "@/lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(handleRegistration, null);
  const router = useRouter();
  // navigate to login page after registration
  useEffect(() => {
    state?.data && router.push("/login");
  }, [state?.data, router]);

  // style
  const inputClass =
    "focus:border-2 border-foreground rounded bg-slate-800 p-2 w-full";
  return (
    <form action={formAction} className="flex flex-col gap-3">
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
      {state?.error && (
        <label className="text-red-500 text-center">{state?.error}</label>
      )}
      <button className="bg-blue-700 py-2 px-3 rounded hover:opacity-50 mt-2">
        Register
      </button>
    </form>
  );
};
export default RegisterForm;

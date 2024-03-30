import RegisterForm from "@/components/registerForm/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <main className="max-w-md mx-auto">
      <h1 className="text-2xl text-center mb-5">Register</h1>
      <RegisterForm />
      <Link href="/login" className="text-center mt-3 block">
        Already have an account?
      </Link>
    </main>
  );
};
export default RegisterPage;

"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="text-center mt-32">
      <h1 className="text-xl mb-5">No Post Found</h1>
      <button
        className="border p-2 rounded hover:opacity-75"
        onClick={() => router.back()}
      >
        Back
      </button>
    </div>
  );
};
export default NotFound;

"use client";

export default function RootError({ error, reset }) {
  return (
    <div className="text-center mt-32">
      <h2 className="h2 text-xl mb-5 text-red-400">{error.message}</h2>
      <button
        className="px-5 py-1 rounded-md border-2 border-black dark:border-red-400 hover:opacity-50"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

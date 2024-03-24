"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="text-center mt-32">
          <h2 className="h2 text-xl mb-3 text-red-400">{error.message}</h2>
          <button
            className="px-2 rounded-md border-2 border-black dark:border-red-400 hover:opacity-50"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

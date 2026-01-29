"use client";

export default function BlogsError({ error, reset }) {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Something went wrong ⚠️</h2>
      <p className="mt-2 text-gray-700">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-black text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}

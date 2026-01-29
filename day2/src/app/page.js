import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Next.js Day 2 🚀</h1>
      <p className="mt-2 text-gray-600">
        Today we will learn dynamic routes + params.
      </p>

      <div className="mt-6">
        <Link
          href="/blogs"
          className="px-4 py-2 rounded bg-black text-white"
        >
          Go to Blogs
        </Link>
      </div>
    </main>
  );
}

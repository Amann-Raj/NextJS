import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Next.js Day 3 🚀</h1>
      <p className="mt-2 text-gray-600">
        Today: loading.js, error.js, not-found.js, nested layouts
      </p>

      <Link
        href="/blogs"
        className="inline-block mt-6 px-4 py-2 rounded bg-black text-white"
      >
        Go to Blogs
      </Link>
    </main>
  );
}

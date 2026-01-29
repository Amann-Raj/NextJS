import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Next.js Day 4 🚀</h1>
      <p className="mt-2 text-gray-600">
        Today: useParams, useSearchParams, useRouter, query filters
      </p>

      <Link
        href="/blogs"
        className="inline-block mt-6 px-4 py-2 rounded bg-black text-white"
      >
        Open Blog Explorer
      </Link>
    </main>
  );
}

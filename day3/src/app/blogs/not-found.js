import Link from "next/link";

export default function BlogsNotFound() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Blog not found ❌</h2>
      <p className="mt-2 text-gray-600">
        The blog you are trying to open does not exist.
      </p>

      <Link
        href="/blogs"
        className="inline-block mt-6 text-blue-600 underline"
      >
        Go back to Blogs
      </Link>
    </div>
  );
}

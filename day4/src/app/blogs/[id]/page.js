import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS } from "@/data/blogs";
import ClientInfo from "./ClientInfo";

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  const blog = BLOGS.find((b) => b.id === blogId);

  if (!blog) notFound();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-2 text-gray-600">
        Category: {blog.category} • Author: {blog.author}
      </p>

      <p className="mt-6 text-gray-800">{blog.content}</p>

      {/* ✅ useParams demo (client component) */}
      <ClientInfo />

      <Link
        href="/blogs"
        className="inline-block mt-6 text-blue-600 underline"
      >
        ← Back to Blogs
      </Link>
    </main>
  );
}

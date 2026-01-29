import Link from "next/link";
import { notFound } from "next/navigation";

const blogs = [
  { id: "1", title: "Next.js Routing Explained", desc: "Routing using app folder." },
  { id: "2", title: "Dynamic Routes with [id]", desc: "Learn dynamic routes." },
  { id: "3", title: "Server vs Client Components", desc: "Learn client/server rendering." },
];

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  const blog = blogs.find((b) => b.id === blogId);

  // ✅ if invalid blog id, show 404
  if (!blog) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.desc}</p>

      <div className="mt-6 flex gap-4">
        <Link href="/blogs" className="text-blue-600 underline">
          ← Back to Blogs
        </Link>

        <Link
          href={`/blogs/${blogId}/comments`}
          className="text-blue-600 underline"
        >
          View Comments →
        </Link>
      </div>
    </div>
  );
}

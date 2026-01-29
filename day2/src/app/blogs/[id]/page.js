import Link from "next/link";
import LikeButton from "./LikeButton";

const blogs = [
  {
    id: "1",
    title: "Learn Next.js Basics",
    author: "Aman",
    description: "This blog teaches you Next.js fundamentals like routing.",
  },
  {
    id: "2",
    title: "Understanding Dynamic Routes",
    author: "Raj",
    description: "This blog teaches how [id] works in Next.js App Router.",
  },
  {
    id: "3",
    title: "Client vs Server Components",
    author: "ChatGPT",
    description: "This blog explains rendering and component types in Next.js.",
  },
];

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;     // ✅ unwrap params
  const blogId = resolvedParams.id;

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <main className="p-8">
        <h1 className="text-xl font-bold">Blog Not Found ❌</h1>
        <Link href="/blogs" className="text-blue-600 underline mt-4 inline-block">
          Go back
        </Link>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{blog.title}</h1>

      <p className="mt-2 text-gray-600">
        Author: <span className="font-semibold">{blog.author}</span>
      </p>

      <p className="mt-4 text-gray-700">{blog.description}</p>

      <LikeButton />

      <Link href="/blogs" className="text-blue-600 underline mt-6 inline-block">
        ← Back to Blogs
      </Link>
    </main>
  );
}

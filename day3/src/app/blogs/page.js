import Link from "next/link";

const blogs = [
  { id: "1", title: "Next.js Routing Explained" },
  { id: "2", title: "Dynamic Routes with [id]" },
  { id: "3", title: "Server vs Client Components" },
];

export default function BlogsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Blogs</h1>
      <p className="mt-2 text-gray-600">
        Click a blog to view details.
      </p>

      <ul className="mt-6 space-y-3">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-600 underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Link from "next/link";

const blogs = [
  { id: "1", title: "Learn Next.js Basics" },
  { id: "2", title: "Understanding Dynamic Routes" },
  { id: "3", title: "Client vs Server Components" },
];

export default function BlogsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Blogs</h1>
      <p className="mt-2 text-gray-600">
        Click on any blog to open details page.
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
    </main>
  );
}

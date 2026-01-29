import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogsPage() {
  const response = await getBlogs();
  const blogs = response.data;

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Manager</h1>

        <Link
          href="/blogs/new"
          className="px-4 py-2 bg-black text-white rounded"
        >
          + New Blog
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 border rounded">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-600">
              {blog.category} • {blog.author}
            </p>

            <p className="mt-2 text-gray-800">{blog.content}</p>

            <div className="mt-4 flex gap-4">
              <Link
                href={`/blogs/${blog.id}/edit`}
                className="text-blue-600 underline"
              >
                Edit
              </Link>

              <Link
                href={`/blogs/${blog.id}/delete`}
                className="text-red-600 underline"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

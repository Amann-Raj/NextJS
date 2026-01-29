import Link from "next/link";
import { BLOGS } from "@/data/blogs";
import Filters from "./Filters";

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const category = resolvedSearchParams?.category || "all";
  const sort = resolvedSearchParams?.sort || "asc";
  const search = (resolvedSearchParams?.search || "").toLowerCase();

  let filteredBlogs = [...BLOGS];

  // filter by category
  if (category !== "all") {
    filteredBlogs = filteredBlogs.filter((b) => b.category === category);
  }

  // filter by search
  if (search) {
    filteredBlogs = filteredBlogs.filter(
      (b) =>
        b.title.toLowerCase().includes(search) ||
        b.content.toLowerCase().includes(search)
    );
  }

  // sort
  filteredBlogs.sort((a, b) => {
    if (sort === "desc") return b.title.localeCompare(a.title);
    return a.title.localeCompare(b.title);
  });

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Blog Explorer</h1>
      <p className="mt-2 text-gray-600">
        Category: <b>{category}</b> | Sort: <b>{sort}</b> | Search:{" "}
        <b>{search || "none"}</b>
      </p>

      {/* ✅ Client component for updating query */}
      <Filters />

      <div className="mt-6 space-y-3">
        {filteredBlogs.length === 0 ? (
          <p className="text-gray-600">No blogs found.</p>
        ) : (
          filteredBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="block p-4 border rounded hover:bg-gray-50"
            >
              <h2 className="font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-600">
                {blog.category.toUpperCase()} • {blog.author}
              </p>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}

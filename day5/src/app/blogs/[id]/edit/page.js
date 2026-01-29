"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBlog() {
      const res = await fetch("/api/blogs");
      const json = await res.json();

      const blog = json.data.find((b) => b.id === params.id);

      if (!blog) {
        alert("Blog not found!");
        router.push("/blogs");
        return;
      }

      setForm(blog);
    }

    loadBlog();
  }, [params.id, router]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(`/api/blogs/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        alert("Failed to update blog");
        return;
      }

      router.push("/blogs");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  if (!form) {
    return (
      <main className="p-8">
        <p className="text-gray-600">Loading blog...</p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="tech">Tech</option>
          <option value="career">Career</option>
        </select>

        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
        />

        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full min-h-[140px]"
        />

        <button
          disabled={loading}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </main>
  );
}

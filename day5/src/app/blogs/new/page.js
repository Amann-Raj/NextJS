"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewBlogPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    category: "tech",
    author: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        alert("Failed to create blog");
        return;
      }

      router.push("/blogs");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold">Create New Blog</h1>

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
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </main>
  );
}

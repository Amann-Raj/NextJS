"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteBlogPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    try {
      setLoading(true);

      await fetch(`/api/blogs/${params.id}`, {
        method: "DELETE",
      });

      router.push("/blogs");
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Delete Blog</h1>
      <p className="mt-2 text-gray-600">
        Are you sure you want to delete blog id: <b>{params.id}</b> ?
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          {loading ? "Deleting..." : "Yes, Delete"}
        </button>

        <button
          onClick={() => router.push("/blogs")}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}

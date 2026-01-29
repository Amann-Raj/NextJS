"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sort") || "asc";
  const currentSearch = searchParams.get("search") || "";

  const [searchValue, setSearchValue] = useState(currentSearch);

  function updateQuery(key, value) {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") params.delete(key);
    else params.set(key, value);

    router.push(`/blogs?${params.toString()}`);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    updateQuery("search", searchValue);
  }

  return (
    <div className="mt-6 p-4 border rounded">
      <h3 className="font-bold">Filters</h3>

      {/* Category */}
      <div className="mt-4 flex gap-3 flex-wrap">
        {["all", "tech", "career"].map((cat) => (
          <button
            key={cat}
            onClick={() => updateQuery("category", cat)}
            className={`px-3 py-1 rounded border ${
              currentCategory === cat ? "bg-black text-white" : ""
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="mt-4 flex gap-3">
        {["asc", "desc"].map((s) => (
          <button
            key={s}
            onClick={() => updateQuery("sort", s)}
            className={`px-3 py-1 rounded border ${
              currentSort === s ? "bg-black text-white" : ""
            }`}
          >
            Sort: {s.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="mt-4 flex gap-2">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search blogs..."
          className="border px-3 py-2 rounded w-full"
        />
        <button className="px-4 py-2 rounded bg-blue-600 text-white">
          Search
        </button>
      </form>

      {/* Reset */}
      <button
        onClick={() => router.push("/blogs")}
        className="mt-4 text-sm underline text-gray-600"
      >
        Clear All Filters
      </button>
    </div>
  );
}

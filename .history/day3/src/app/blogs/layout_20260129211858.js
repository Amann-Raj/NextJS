import Link from "next/link";

export default function BlogsLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="border-r p-6">
        <h2 className="font-bold text-xl">Blogs Section</h2>

        <nav className="mt-6 flex flex-col gap-3">
          <Link href="/blogs" className="text-blue-600 underline">
            All Blogs
          </Link>
          <Link href="/" className="text-blue-600 underline">
            Home
          </Link>
        </nav>

        <p className="mt-8 text-sm text-gray-600">
          This sidebar comes from <code>blogs/layout.js</code>
        </p>
      </aside>

      {/* Page Content */}
      <section className="p-8">{children}</section>
    </div>
  );
}

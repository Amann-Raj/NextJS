import { blogStore } from "@/lib/blogStore";

export async function PUT(req, { params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const body = await req.json();
  const { title, category, author, content } = body;

  const blogIndex = blogStore.blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    return Response.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }

  const updatedBlog = {
    ...blogStore.blogs[blogIndex],
    title,
    category,
    author,
    content,
  };

  blogStore.blogs[blogIndex] = updatedBlog;

  return Response.json({
    success: true,
    message: "Blog updated successfully",
    data: updatedBlog,
  });
}

export async function DELETE(req, { params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const blogIndex = blogStore.blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    return Response.json(
      { success: false, message: "Blog not found" },
      { status: 404 }
    );
  }

  const deletedBlog = blogStore.blogs[blogIndex];
  blogStore.blogs.splice(blogIndex, 1);

  return Response.json({
    success: true,
    message: "Blog deleted successfully",
    data: deletedBlog,
  });
}

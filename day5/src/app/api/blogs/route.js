import { blogStore } from "@/lib/blogStore";

export async function GET() {
  return Response.json({
    success: true,
    data: blogStore.blogs,
  });
}

export async function POST(req) {
  const body = await req.json();
  const { title, category, author, content } = body;

  if (!title || !category || !author || !content) {
    return Response.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  const newBlog = {
    id: String(Date.now()),
    title,
    category,
    author,
    content,
  };

  blogStore.blogs.unshift(newBlog);

  return Response.json({
    success: true,
    message: "Blog created successfully",
    data: newBlog,
  });
}

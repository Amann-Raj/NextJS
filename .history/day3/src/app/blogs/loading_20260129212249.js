export default function LoadingBlogs() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold">Loading Blogs...</h2>
      <p className="mt-2 text-gray-600">Please wait</p>

      <div className="mt-6 space-y-3">
        <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

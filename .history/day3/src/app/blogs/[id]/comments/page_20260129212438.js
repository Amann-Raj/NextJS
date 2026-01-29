export default async function CommentsPage({ params }) {
  const resolvedParams = await params;

  return (
    <div>
      <h2 className="text-2xl font-bold">Comments</h2>
      <p className="mt-2 text-gray-600">
        Showing comments for blog id: {resolvedParams.id}
      </p>
    </div>
  );
}

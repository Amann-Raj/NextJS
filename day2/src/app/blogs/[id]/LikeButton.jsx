"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-6 px-4 py-2 rounded bg-green-600 text-white"
    >
      👍 Like ({likes})
    </button>
  );
}

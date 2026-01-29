"use client";

import { useParams } from "next/navigation";

export default function ClientInfo() {
  const params = useParams();

  return (
    <p className="mt-6 text-sm text-gray-600">
      (Client Component) Current Blog ID: <b>{params.id}</b>
    </p>
  );
}

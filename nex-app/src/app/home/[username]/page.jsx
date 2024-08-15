"use client"; // Marks this as a client-side component
import { useRouter } from "next/navigation"; // Correct import for App Router

export default function UsernamePage({ params }) {
  console.log(params);
  return (
    <>
      <h1>Hello from {params.username}</h1>
    </>
  );
}

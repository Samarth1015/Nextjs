"use client"; // Marks this as a client-side component
import { Darumadrop_One } from "next/font/google";
import { useRouter } from "next/navigation"; // Correct import for App Router
import Link from "next/navigation";

const dataFetch = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(
    data.json().then((res) => {
      console.log(res);
    })
  );
};

export default function UsernamePage({ params }) {
  console.log(params);
  dataFetch();
  return (
    <>
      <h1>Hello from {params.username}</h1>
    </>
  );
}

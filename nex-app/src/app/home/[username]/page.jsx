import { Darumadrop_One } from "next/font/google";

import Link from "next/navigation";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
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

      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </>
  );
}

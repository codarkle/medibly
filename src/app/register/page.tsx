"use client"

import { Header } from "@/components/layout";
import { SignUp } from "@/components/auth";

export default function Register() {

  return (
    <>
      <Header type="register"/>
      <div className="w-full max-w-screen-2xl bg-transparent mx-auto flex flex-col items-center p-4 pt-24">
        <SignUp />
      </div>
    </>
  );
}

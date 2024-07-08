import SignInForm from "@/components/forms/SignInForm";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Signin() {
  return (
    <>
      <SignIn/>
    </>
  );
}

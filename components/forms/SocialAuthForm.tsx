"use client";

import { toast } from "sonner";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import ROUTE from "@/constants/routes";

const SocialAuthForm = () => {
  // since we reuse the className so many times we can just put them in a variable
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 round-2 flex-1 py-3.5 px-4  cursor-pointer";

  const handleSignIn = async (provider: "github" | "google") => {
    // Implement sign-in logic here
    try {
      await signIn(provider, {
        callbackUrl: ROUTE.HOME,
      });
    } catch (error) {
      console.log(error);
      toast("Sign-in Fail", {
        description: error instanceof Error ? error.message : "Error occur during sign-in.",
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="GitHub Icon"
          width={24}
          height={24}
          className="invert-colors mr-2.5 object-contain"
        />
        <span className="">Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image src="/icons/google.svg" alt="Google Icon" width={24} height={24} className="mr-2.5 object-contain" />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;

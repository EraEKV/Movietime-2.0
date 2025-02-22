"use client"

import { signIn } from "next-auth/react"; 

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/shared/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="size-lg w-full hover:bg-none" variant="outline" onClick={() => onClick("google")} >
        <FcGoogle size={12} />
      </Button>

      <Button className="size-lg w-full hover:bg-none" variant="outline" onClick={() => onClick("github")} >
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
};
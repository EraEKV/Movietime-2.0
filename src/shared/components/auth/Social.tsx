"use client"

import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { Button } from "@/shared/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
        <Button className="size-lg w-full hover:bg-none" variant="outline" onClick={() => {}} >
            <FcGoogle size={12} />
        </Button>

        <Button className="size-lg w-full hover:bg-none" variant="outline" onClick={() => {}} >
            <FaApple className="w-6 h-6" />
        </Button>
    </div>
  );
};
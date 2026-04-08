"use client";

import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Button
      className="bg-transparent hover:dark:bg-transparent"
      variant="ghost"
      onClick={() => router.push("/")}
    >
      <House className="size-6" />
    </Button>
  );
};

export default Logo;

"use client";

import { Button } from "@/components/ui/button";
import pathnames from "@/constants/pathnames";
import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h2 className="text-2xl font-bold">Welcome to the Heroes</h2>
      <Button onClick={() => router.push(pathnames.HEROES)}>
        <ChevronsRight /> ENTER
      </Button>
    </div>
  );
};

export default HomePage;

"use client";

import { Button } from "@/components/ui/button";
import pathnames from "@/constants/pathnames";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <section className="absolute inset-0 flex items-center justify-center">
      <div className="mx-auto w-full max-w-7xl flex flex-col items-center justify-center gap-8 px-6 py-16 text-center md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:text-left">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-black dark:text-white sm:text-5xl lg:text-6xl">
            英雄能力值分配器
          </h2>
          <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 sm:text-2xl">
            強化你想要的英雄角色，打造專屬於你的最強英雄！
          </p>
        </div>

        <Button
          size="lg"
          className="h-16 rounded-2xl px-8 text-2xl font-medium"
          onClick={() => router.push(pathnames.HEROES)}
        >
          進入
          <ArrowRight className="ml-3 size-6" />
        </Button>
      </div>
    </section>
  );
};

export default HomePage;

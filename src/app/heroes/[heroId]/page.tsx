"use client";

import { useGetHeroProfileByIdQuery } from "@/api/queries";
import HeroProfile from "@/components/heroes/hero-profile";
import { useParams } from "next/navigation";

const HeroPage = () => {
  const { heroId } = useParams<{ heroId: string }>();
  const { data, isLoading } = useGetHeroProfileByIdQuery({ id: heroId });

  if (isLoading)
    return (
      <p className="text-xl text-neutral-600 dark:text-neutral-300">
        載入中...
      </p>
    );

  if (!data)
    return (
      <p className="text-xl text-center tracking-widest leading-relaxed text-neutral-600 dark:text-neutral-300">
        找不到這位英雄喔...
        <br />
        請選擇上面任何一位進行查看吧！
      </p>
    );

  return (
    <div className="w-full flex justify-center">
      <HeroProfile key={heroId} id={heroId} data={data} />
    </div>
  );
};

export default HeroPage;

"use client";

import { useGetHeroesQuery } from "@/api/queries";
import HeroList from "@/components/heroes/hero-list";
import HeroListSkeleton from "@/components/heroes/hero-list-skeleton";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeroesLayout = ({ children }: Props) => {
  const { data, isLoading } = useGetHeroesQuery();

  return (
    <div className="w-full flex flex-col items-center px-8 gap-8 mt-8">
      {isLoading ? <HeroListSkeleton /> : <HeroList data={data} />}
      {children}
    </div>
  );
};

export default HeroesLayout;

"use client";

import { useGetHeroesQuery } from "@/api/queries";
import HeroList from "@/components/heroes/hero-list";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeroesLayout = ({ children }: Props) => {
  const { data, isLoading } = useGetHeroesQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-full flex flex-col items-center px-8 gap-8 mt-8">
      <HeroList data={data} />
      {children}
    </div>
  );
};

export default HeroesLayout;

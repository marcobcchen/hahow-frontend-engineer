"use client";

import { useGetHeroProfileByIdQuery } from "@/api/queries";
import HeroProfile from "@/components/heroes/hero-profile";
import { useParams } from "next/navigation";

const HeroPage = () => {
  const { heroId } = useParams<{ heroId: string }>();
  const { data, isLoading } = useGetHeroProfileByIdQuery({ id: heroId });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No profile found.</div>;

  return (
    <div className="w-full flex justify-center">
      <HeroProfile key={heroId} id={heroId} data={data} />
    </div>
  );
};

export default HeroPage;

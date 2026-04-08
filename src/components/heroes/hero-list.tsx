import { HeroType } from "@/api/types";
import HeroCard from "./hero-card";

interface Props {
  data?: HeroType[];
}

const HeroList = ({ data }: Props) => {
  return (
    <section className="w-full max-w-200 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
      {data?.map((hero) => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          image={hero.image}
        />
      ))}
    </section>
  );
};

export default HeroList;

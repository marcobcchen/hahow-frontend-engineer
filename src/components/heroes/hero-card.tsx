import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import pathnames from "@/constants/pathnames";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  image: string;
}

const HeroCard = ({ id, name, image }: Props) => {
  const router = useRouter();
  const { heroId } = useParams<{ heroId: string }>();
  const isActive = heroId === id;

  return (
    <Card
      className={`relative w-full pt-0 rounded-lg ${isActive ? "ring-4 ring-primary dark:ring-primary" : ""}`}
    >
      <div className="absolute inset-0 z-30 aspect-square bg-black/35" />
      <div className="relative z-20 w-full aspect-square">
        <Image src={image} alt={name} objectFit="cover" fill />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => router.push(`${pathnames.HEROES}/${id}`)}
        >
          查看能力值
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HeroCard;

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const HeroListSkeleton = () => {
  return (
    <section className="w-full max-w-200 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="w-full pt-0 rounded-lg">
          <CardHeader className="px-0">
            <Skeleton className="aspect-square w-full rounded-none" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-2/3 mb-4" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default HeroListSkeleton;

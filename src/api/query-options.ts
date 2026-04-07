import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const second = (time: number) =>
  dayjs.duration(time, "second").asMilliseconds();
const minute = (time: number) =>
  dayjs.duration(time, "minute").asMilliseconds();
const hour = (time: number) => dayjs.duration(time, "hour").asMilliseconds();
const day = (time: number) => dayjs.duration(time, "day").asMilliseconds();

export const queryOptions: {
  [key: string]: Partial<{
    staleTime: number;
    gcTime: number;
    refetchOnWindowFocus: boolean;
    retry: number;
    retryDelay: number;
  }>;
} = {
  useGetHeroesQuery: {
    staleTime: minute(5),
    gcTime: minute(30),
  },
  useGetHeroByIdQuery: {
    staleTime: minute(10),
    gcTime: minute(30),
  },
  useGetHeroProfileByIdQuery: {
    staleTime: minute(10),
    gcTime: minute(30),
  },
};

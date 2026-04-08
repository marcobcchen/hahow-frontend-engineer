import { queryKeys } from "@/api/query-keys";
import { queryOptions } from "@/api/query-options";
import { getHeroById, getHeroes, getHeroProfileById } from "@/api/requests";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useGetHeroesQuery<
  TData = Awaited<ReturnType<typeof getHeroes>>,
  TError = AxiosError,
>(
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof getHeroes>>,
    TError,
    TData
  >,
) {
  return useQuery({
    queryKey: [queryKeys.HEROES],
    queryFn: getHeroes,
    ...queryOptions.useGetHeroesQuery,
    ...options,
  });
}

export function useGetHeroByIdQuery<
  TData = Awaited<ReturnType<typeof getHeroById>>,
  TError = AxiosError,
>(
  params: { id: string },
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof getHeroById>>,
    TError,
    TData
  >,
) {
  return useQuery({
    queryKey: [queryKeys.HERO, { id: params.id }],
    queryFn: () => getHeroById(params.id),
    ...queryOptions.useGetHeroByIdQuery,
    ...options,
  });
}

export function useGetHeroProfileByIdQuery<
  TData = Awaited<ReturnType<typeof getHeroProfileById>>,
  TError = AxiosError,
>(
  params: { id: string },
  options?: UseQueryOptions<
    Awaited<ReturnType<typeof getHeroProfileById>>,
    TError,
    TData
  >,
) {
  return useQuery({
    queryKey: [queryKeys.HERO_PROFILE, { id: params.id }],
    queryFn: () => getHeroProfileById(params.id),
    ...queryOptions.useGetHeroProfileByIdQuery,
    ...options,
  });
}

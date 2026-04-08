import { HeroProfileType, HeroType } from "@/api/types";
import { endpoints } from "@/constants/endpoint";
import axios from "axios";

/**
 * @name 取得所有英雄基本資料
 */
export const getHeroes = async (): Promise<HeroType[]> => {
  const res = await axios({
    method: "GET",
    url: endpoints.HEROES,
  });
  return res.data;
};

/**
 * @name 根據英雄ID取得該英雄基本資料
 * @param id 英雄ID
 */
export const getHeroById = async (id: string): Promise<HeroType> => {
  const res = await axios({
    method: "GET",
    url: `${endpoints.HEROES}/${id}`,
  });
  return res.data;
};

/**
 * @name 根據英雄ID取得該英雄能力資料
 * @param id 英雄ID
 */
export const getHeroProfileById = async (
  id: string,
): Promise<HeroProfileType> => {
  const res = await axios({
    method: "GET",
    url: `${endpoints.HEROES}/${id}/profile`,
  });
  return res.data;
};

/**
 * @name 根據英雄ID紀錄該英雄能力資料
 * @param id 英雄ID
 * @param str 英雄力量
 * @param int 英雄智力
 * @param agi 英雄敏捷
 * @param luk 英雄幸運
 */
export const saveStats = async (data: {
  id: string;
  str: number;
  int: number;
  agi: number;
  luk: number;
}) => {
  const { id, ...params } = data;
  const res = await axios({
    method: "PATCH",
    url: `${endpoints.HEROES}/${id}/profile`,
    data: params,
  });
  return res.data;
};

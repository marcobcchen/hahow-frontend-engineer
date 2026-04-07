import { Hero, HeroProfile } from "@/api/types";
import { endpoints } from "@/constants/endpoint";
import axios from "axios";

/**
 * @name 取得所有英雄基本資料
 */
export const getHeroes = async (): Promise<Hero[]> => {
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
export const getHeroById = async (id: number): Promise<Hero> => {
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
export const getHeroProfileById = async (id: number): Promise<HeroProfile> => {
  const res = await axios({
    method: "GET",
    url: `${endpoints.HEROES}/${id}/profile`,
  });
  return res.data;
};

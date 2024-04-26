import { getSummonerInfoByAccount } from "@/4.features/SummonerSearch/api";
import { Summoner } from "@/5.entities/Summoner/model";
import { LoaderFunction } from "react-router-dom";

export const summonerLoader: LoaderFunction = async ({
  params,
}): Promise<Summoner> => {
  const { gameName, tagLine } = params;
  if (gameName === undefined || tagLine === undefined) {
    // 에러 핸들링 필요
    throw new Error("");
  }

  return getSummonerInfoByAccount(gameName, tagLine);
};

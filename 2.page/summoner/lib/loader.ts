import { getSummonerMatches } from "@/3.widget/Match/api";
import { getSummonerPlayInfo } from "@/4.features/SummonerSearch/api";
import { LoaderFunction } from "react-router-dom";

export const summonerLoader: LoaderFunction = async ({ params }) => {
  const { gameName, tagLine } = params;
  if (gameName === undefined || tagLine === undefined) {
    // 에러 핸들링 필요
    throw new Error("");
  }

  const playInfo = await getSummonerPlayInfo(gameName, tagLine);
  const matches = await getSummonerMatches(playInfo.puuid);
  return {
    playInfo,
    matches: matches,
  };
};

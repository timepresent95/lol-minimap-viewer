import { RankInfo } from "@/5.entities/League/model";
import { Summoner } from "@/5.entities/SummonerProfile/model";
import { fetchQuery } from "@/6.shared/lib/api";

export async function getSummonerPlayInfo(
  gameName: string,
  tagLine: string
): Promise<
  Summoner & {
    rankInfos: RankInfo[];
  }
> {
  const path = `/summoner/${gameName}/${tagLine}`;
  return await fetchQuery(path, { method: "get" }, [
    `summoner-${gameName}-${tagLine}`,
  ]);
}



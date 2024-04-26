import { Summoner } from "@/5.entities/Summoner/model";
import { fetchQuery } from "@/6.shared/lib/api";

export async function getSummonerInfoByAccount(
  gameName: string,
  tagLine: string
): Promise<Summoner> {
  const path = `/summoner/${gameName}/${tagLine}`;
  return await fetchQuery(path, { method: "get" }, [
    `summoner-${gameName}-${tagLine}`,
  ]);
}

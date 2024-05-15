import { Rank } from "@/5.entities/League/model";
import { fetchQuery } from "@/6.shared/lib/api";
interface Response {
  gameName: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
  revisionDate: Date;
  ranks: Rank[];
}

export async function getSummonerInfoByAccount(
  gameName: string,
  tagLine: string
): Promise<Response> {
  const path = `/summoner/${gameName}/${tagLine}`;
  return await fetchQuery(path, { method: "get" }, [
    `summoner-${gameName}-${tagLine}`,
  ]);
}

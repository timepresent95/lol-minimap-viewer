import { League, LeagueEntry } from "@/5.entities/League/model";
import { Summoner } from "@/5.entities/Summoner/model";
import { fetchQuery } from "@/6.shared/lib/api";

interface Response {
  summoner: Summoner;
  leagueEntries: LeagueEntry & { League: League };
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

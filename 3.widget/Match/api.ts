import { Match } from "@/3.widget/Match/model";
import { fetchQuery } from "@/6.shared/lib/api";

export async function getSummonerMatches(puuid: string): Promise<Match[]> {
  const path = `/summoner/${puuid}/matches`;
  return await fetchQuery(path, { method: "get" }, [`matches-${puuid}`]);
}
